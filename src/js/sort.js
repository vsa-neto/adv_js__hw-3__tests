export default function sortCharacters(obj){
    obj.sort((a, b)=> b.health - a.health);
    return obj;
};
