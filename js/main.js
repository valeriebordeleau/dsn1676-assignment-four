var blueberries = {
    scientificName: 'Vaccinium corymbosum',
    growsOnShrub: true,
    energyInKJ: 240,
    carbohydratesInG: 14.49,
    proteinInG: 0.74,
};

var grapes = {
    scientificName: 'Vitis vinifera',
    growsOnShrub: false,
    energyInKJ: 288,
    carbohydratesInG: 18.1,
    proteinInG: 0.72,
};

var redCurrant = {
    scientificName: 'Ribes rubrum',
    growsOnShrub: true,
    energyInKJ: 234,
    carbohydratesInG: 13.8,
    proteinInG: 1.4,
};

var writeBerryInfo = function (berry) {
    document.write('<h1>'+ berry.scientificName +'</h1>');
    document.write('<dl>');
    document.write('<dt>Scientific Name</dt>');
    document.write('<dd>' + berry.growsOnShrub+ '</dd>');
    document.write('<dt>Does it grow on a shrub?</dt>');
    document.write('<dd>' + berry.energyInKJ+ '</dd>');
    document.write('<dt>Energry produced in KJ</dt>');
    document.write('<dd>' + berry.carbohydratesInG+ '</dd>');
    document.write('<dt>Carbs in g</dt>');
    document.write('<dd>' + berry.proteinInG+ '</dd>');
    document.write('<dt>Protein in g</dt>');
    document.write('</dl>');
};

var allFruit = [blueberries, redCurrant ,grapes];

allFruit.forEach(writeBerryInfo);