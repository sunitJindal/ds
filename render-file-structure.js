const files = [{
  name: 'Dir 1',
  type: 'dir',
  files: [{
    name: 'Child 1.txt',
    type: 'file'
  },{
    name: 'Child 2',
    type: 'dir',
    files: [{
        name: 'Child 1.txt',
        type: 'file'
      },{
        name: 'Child 2.png',
        type: 'file'
      },{
        name: 'Child 3.doc',
        type: 'file'
      },{
        name: 'Child 4.mp4',
        type: 'file'
      }]
  },{
    name: 'Child 3.doc',
    type: 'file'
  },{
    name: 'Child 4.mp4',
    type: 'file'
  }]
}, {
  name: 'Dir 2',
  type: 'dir',
  files: [{
    name: 'Child 1.exe',
    type: 'file'
  },{
    name: 'Child 2.png',
    type: 'file'
  },{
    name: 'Child 3.dmg',
    type: 'file'
  },{
    name: 'Child 4.woff',
    type: 'file'
  }]
}];

const baseMarker = '|';
const baseNestedMarker = '-'
function traverseList(list, activeIndex, marker) {
  const selectedIndex = activeIndex || 0;
  let str = '';
  let selectedMarker = marker || '|';
  
  list.forEach((entity, index) => {
    str += `${selectedMarker}${entity.name}\n`;
    
    if (entity.type === 'dir') {
      str += traverseList(entity.files, selectedIndex + 1, selectedMarker + baseNestedMarker);
    }
  });
   return str;
};



console.log(`\n${traverseList(files)}`);



