const biomes = [
  {
    world: 'overworld',
    type: 'offland',
    name: 'ocean',
    position: '-16px -32px',
  },
  {
    world: 'overworld',
    type: 'offland',
    name: 'deepOcean',
    position: '-32px -48px',
  },
  {
    world: 'overworld',
    type: 'offland',
    name: 'warmOcean',
    position: '-64px -128px',
  },
  {
    world: 'overworld',
    type: 'offland',
    name: 'lukewarmOcean',
    position: '-32px -128px',
  },
  {
    world: 'overworld',
    type: 'offland',
    name: 'deepLukewarmOcean',
    position: '-16px -128px',
  },
  {
    world: 'overworld',
    type: 'offland',
    name: 'coldOcean',
    position: '-112px -112px',
  },
  {
    world: 'overworld',
    type: 'offland',
    name: 'deepColdOcean',
    position: '0px -128px',
  },
  {
    world: 'overworld',
    type: 'offland',
    name: 'frozenOcean',
    position: '-32px -32px',
  },
  {
    world: 'overworld',
    type: 'offland',
    name: 'deepFrozenOcean',
    position: '0px -112px',
  },
  {
    world: 'overworld',
    type: 'offland',
    name: 'mushroomFields',
    position: '0px -16px',
  },
  {
    world: 'overworld',
    type: 'highland',
    name: 'jaggedPeaks',
    position: '-112px -160px',
  },
  {
    world: 'overworld',
    type: 'highland',
    name: 'frozenPeaks',
    position: '0px -176px',
  },
  {
    world: 'overworld',
    type: 'highland',
    name: 'stonyPeaks',
    position: '-32px -176px',
  },
  {
    world: 'overworld',
    type: 'highland',
    name: 'meadow',
    position: '-64px -160px',
  },
  {
    world: 'overworld',
    type: 'highland',
    name: 'cherryGrove',
    position: '-80px -176px',
  },
  {
    world: 'overworld',
    type: 'highland',
    name: 'grove',
    position: '-80px -160px',
  },
  {
    world: 'overworld',
    type: 'highland',
    name: 'snowySlopes',
    position: '-96px -160px',
  },
  {
    world: 'overworld',
    type: 'highland',
    name: 'windsweptHills',
    position: '-112px 0px',
  },
  {
    world: 'overworld',
    type: 'highland',
    name: 'windsweptGravellyHills',
    position: '-48px -80px',
  },
  {
    world: 'overworld',
    type: 'highland',
    name: 'windsweptForest',
    position: '-80px -48px',
  },
  {
    world: 'overworld',
    type: 'woodland',
    name: 'forest',
    position: '0px 0px',
  },
  {
    world: 'overworld',
    type: 'woodland',
    name: 'flowerForest',
    position: '-16px -64px',
  },
  {
    world: 'overworld',
    type: 'woodland',
    name: 'taiga',
    position: '-96px -48px',
  },
  {
    world: 'overworld',
    type: 'woodland',
    name: 'oldGrowthPineTaiga',
    position: '-64px -16px',
  },
  {
    world: 'overworld',
    type: 'woodland',
    name: 'oldGrowthSpruceTaiga',
    position: '-112px -48px',
  },
  {
    world: 'overworld',
    type: 'woodland',
    name: 'snowyTaiga',
    position: '-96px 0px',
  },
  {
    world: 'overworld',
    type: 'woodland',
    name: 'birchForest',
    position: '-80px -32px',
  },
  {
    world: 'overworld',
    type: 'woodland',
    name: 'oldGrowthBirchForest',
    position: '-32px -64px',
  },
  {
    world: 'overworld',
    type: 'woodland',
    name: 'darkForest',
    position: '-112px -32px',
  },
  {
    world: 'overworld',
    type: 'woodland',
    name: 'jungle',
    position: '-64px 0px',
  },
  {
    world: 'overworld',
    type: 'woodland',
    name: 'sparseJungle',
    position: '-64px -64px',
  },
  {
    world: 'overworld',
    type: 'woodland',
    name: 'bambooJungle',
    position: '-80px -128px',
  },
  {
    world: 'overworld',
    type: 'wetland',
    name: 'river',
    position: '-80px -16px',
  },
  {
    world: 'overworld',
    type: 'wetland',
    name: 'frozenRiver',
    position: '-96px -16px',
  },
  {
    world: 'overworld',
    type: 'wetland',
    name: 'swamp',
    position: '-48px 0px',
  },
  {
    world: 'overworld',
    type: 'wetland',
    name: 'mangroveSwamp',
    position: '-48px -176px',
  },
  {
    world: 'overworld',
    type: 'wetland',
    name: 'beach',
    position: '-112px -16px',
  },
  {
    world: 'overworld',
    type: 'wetland',
    name: 'snowyBeach',
    position: '-16px -48px',
  },
  {
    world: 'overworld',
    type: 'wetland',
    name: 'stonyShore',
    position: '0px -48px',
  },
  {
    world: 'overworld',
    type: 'flatland',
    name: 'plains',
    position: '-32px 0px',
  },
  {
    world: 'overworld',
    type: 'flatland',
    name: 'sunflowerPlains',
    position: '0px -64px',
  },
  {
    world: 'overworld',
    type: 'flatland',
    name: 'snowyPlains',
    position: '-80px 0px',
  },
  {
    world: 'overworld',
    type: 'flatland',
    name: 'iceSpikes',
    position: '0px -80px',
  },
  {
    world: 'overworld',
    type: 'aridland',
    name: 'desert',
    position: '-16px 0px',
  },
  {
    world: 'overworld',
    type: 'aridland',
    name: 'savanna',
    position: '-96px -32px',
  },
  {
    world: 'overworld',
    type: 'aridland',
    name: 'savannaPlateau',
    position: '-32px -96px',
  },
  {
    world: 'overworld',
    type: 'aridland',
    name: 'windsweptSavanna',
    position: '-80px -64px',
  },
  {
    world: 'overworld',
    type: 'aridland',
    name: 'badlands',
    position: '-48px -16px',
  },
  {
    world: 'overworld',
    type: 'aridland',
    name: 'woodedBadlands',
    position: '-96px -64px',
  },
  {
    world: 'overworld',
    type: 'aridland',
    name: 'erodedBadlands',
    position: '-112px -64px',
  },
  {
    world: 'overworld',
    type: 'cave',
    name: 'deepDark',
    position: '-64px -176px',
  },
  {
    world: 'overworld',
    type: 'cave',
    name: 'dripstoneCaves',
    position: '-48px -160px',
  },
  {
    world: 'overworld',
    type: 'cave',
    name: 'lushCaves',
    position: '-16px -176px',
  },
  {
    world: 'nether',
    type: 'nether',
    name: 'netherWastes',
    position: '-16px -16px',
  },
  {
    world: 'nether',
    type: 'nether',
    name: 'soulSandValley',
    position: '-16px -160px',
  },
  {
    world: 'nether',
    type: 'nether',
    name: 'crimsonForest',
    position: '-112px -144px',
  },
  {
    world: 'nether',
    type: 'nether',
    name: 'warpedForest',
    position: '0px -160px',
  },
  {
    world: 'nether',
    type: 'nether',
    name: 'basaltDeltas',
    position: '-32px -160px',
  },
  {
    world: 'end',
    type: 'end',
    name: 'theEnd',
    position: '-32px -16px',
  },
  {
    world: 'end',
    type: 'end',
    name: 'smallEndIslands',
    position: '-64px -112px',
  },
  {
    world: 'end',
    type: 'end',
    name: 'endMidlands',
    position: '-80px -112px',
  },
  {
    world: 'end',
    type: 'end',
    name: 'endHighlands',
    position: '-48px -112px',
  },
  {
    world: 'end',
    type: 'end',
    name: 'endBarrens',
    position: '-96px -112px',
  },
]

export default biomes