var simpleText = require('./index');
var assert = require('assert');

// Validate that we have a public replace map
function testReplaceMap(){
  if (!simpleText.replace){
    return "replace is undefined";
  }

  if (typeof simpleText.replace !== 'object'){
    return typeof simpleText.replace;
  }

  return true;
}


describe('testReplaceMap()', function(){
  it('check to see if the replace map is valid', function(){
    assert.equal(true, testReplaceMap());
  });
});


// Validates that we have a public ignore map
function testIgnoreMap(){
  if (!simpleText.ignore){
    return "ignore is undefined"
  }
  if (typeof simpleText.ignore !== 'object'){
    return typeof simpleText.replace;
  }
  return true;
}


describe('testIgnoreMap()', function(){
  it('check to see if the ignore map is valid', function(){
    assert.equal(true, testIgnoreMap());
  });
});


// Check to make sure we get valid keys
var keys = ['Air', 'Eau', 'Grêle', 'Niño', 'ALL'];
var expected = ['air', 'eau', 'grele', 'nino', 'all'];


describe('getKey', function(){
  keys.forEach(function(key, index){
    it('check to see if we get a valid key for ' + key, function(){
      assert.equal(simpleText.getKey(key), expected[index]);
    });
  });
});



// Check if we can generate keys for a phrase
describe('getKeys', function(){
  var sentence = "C'etait une fois. Cherche pour moi!";
  var output = ['cetait', 'une', 'fois', 'cherche', 'pour', 'moi'];
  it('check to see if we can generate keys for a sentence', function(){
    simpleText.getKeys(sentence).forEach(function(val, index){
      assert.equal(val, output[index]);
    })
  });
});


// Check to make sure we get valid keys
var search_keys = ['Air Eau Grêle', 'Niño', 'ALL'];
var search_expected = ['air eau grele', 'nino', 'all'];

describe('searchText', function(){
  search_keys.forEach(function(key, index){
    it('check to see if we get a valid key for ' + key, function(){
      var output = simpleText.searchText(key);
      assert.equal(output, search_expected[index]);
    });
  });
});


var pre_process = ['Air-Ballon', 'Grand-Diseur'];
var pre_output = ['Air Ballon', 'Grand Diseur'];

describe('PreProcess', function(){
  pre_process.forEach(function(val, index){
    it('check to see if we replace dash for ' + val, function(){
      var output = simpleText.preProcess(val);
      assert.equal(output, pre_output[index]);
    });
  });
});


var indexes = ['haiti'];
var indexes_expected = ['H'];

describe('getIndexes', function(){
  indexes.forEach(function(val, index){
    it('checks for the index of ' + val, function(){
      var output = simpleText.getIndexer(val);
      assert.equal(output, indexes_expected[0]);
    });
  });
});


// 
var capitalize = ['ok', 'sir', 'tagolu'];
var capitalize_expected = ['Ok', 'Sir', 'Tagolu'];

describe('capKey', function(){
  capitalize.forEach(function(val, index){
    it('check for capitalization of ' + val, function(){
      var output = simpleText.capKey(val);
      assert.equal(output, capitalize_expected[index]);
    })
  })
})
