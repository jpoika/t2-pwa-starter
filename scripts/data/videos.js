var fs = require('fs');
var parse = require('csv-parse');
var https = require('https');
var readVids = fs.createReadStream(__dirname+'/in/ad-resilience-videos2.csv');
var writeVids = fs.createWriteStream(__dirname+'/out/videos/videos.json');

var videoId = 1;
var vidoesList = [];

var download = function(url, dest, cb) {
  console.log(dest);
  var file = fs.createWriteStream(dest);
  var request = https.get(url, function(response) {
    response.pipe(file);
    file.on('finish', function() {
      file.close(cb);  // close() is async, call cb after close completes.
    });
  }).on('error', function(err) { // Handle errors
    fs.unlink(dest); // Delete the file async. (But we don't check the result)
    if (cb) cb(err.message);
  });
};

function getFileName(filename) {
    var queryPos = filename.indexOf('?');
    if(queryPos > -1){
      filename = filename.substring(0,queryPos);
    }
    return filename;
}

function downloadCb(err,res){
  console.log("Download cb");
  if(err){
    console.log(err);
  }
}

const parserSubdir = (outSubdir,writeStream) => {
  var parser = parse(function(err, data){

    var header = data['0'];
    var jsonOut = [];
    writeStream.write('[')
    for(var i = 1; i < data.length; i++){
      var datum = data[i];
      var url = datum[2];
      var filename = getFileName(url.split('/').pop())
      download(url,__dirname + '/out/' + outSubdir + '/images/' + filename,downloadCb);
      var jsItem =  {
                      id: i,
                      img: filename,
                      src: datum[3],
                      title: datum[0],
                      author: 'T2',
                      url: '',
                      featured: false
                    };
      const lineEnd = i < data.length ? ",\n" : "\n";
      writeStream.write(JSON.stringify(jsItem)+lineEnd)

    }
    writeStream.write(']')

  });
  return parser;
}

readVids
  .pipe(parserSubdir('videos',writeVids));

