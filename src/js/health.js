export default function healthStatus(obj){
    switch(true){
    case obj.health > 50:
        return 'healthy';
    case (obj.health > 15 && obj.health <= 50):
        return 'wounded';
    case (obj.health <= 15):
        return 'critical';
    }
};
