import healthStatus from '../health';
import sortCharacters from '../sort';

const characters = [
    {
        name: 'мечник', health: 15, statusHealth: 'critical'
    },
    {
        name: 'маг', health: 100, statusHealth: 'healthy'
    },
    {
        name: 'лучник', health: 50, statusHealth: 'wounded'
    }
];

test.each(characters)('health status for character $name with health: $health' , (character)=> {
    const result = healthStatus(character);
    expect(result).toEqual(character.statusHealth);
});

const beforeSorting = [
    {
        name: 'мечник', health: 15
    },
    {
        name: 'маг', health: 100
    },
    {
        name: 'лучник', health: 50
    },
];

const afterSorting = [
    {
        name: 'маг', health: 100
    },
    {
        name: 'лучник', health: 50
    },
    {
        name: 'мечник', health: 15
    },
];

test('sort characters by health' , ()=> {
    const result = sortCharacters(beforeSorting);
    expect(result).toEqual(afterSorting);
});