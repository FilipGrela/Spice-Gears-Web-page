new svgMap({
  targetElementID: 'svgMap',
  colorMax: '#057a05',
  colorMin: '#03fc03',
  data: {
    data: {
      wizyty: {
        name: 'Ilość wizyt: ',
        format: '{0}',
      },
      turnieje: {
        name: 'Ilość zwycięstw: ',
        format: '{0}'
      },
      zwycięstwa: {
        name: 'Ilość zwycięstw: ',
        format: '{0}'
      }
    },
    applyData: 'wizyty',
    values: {
      PL: { wizyty: 1, turnieje: 3, zwycięstwa: 3 },
      RU: { wizyty: 2, turnieje: 2, zwycięstwa: 1 },
      US: { wizyty: 3, turnieje: 1, zwycięstwa: 2 }
    }
  }    
});