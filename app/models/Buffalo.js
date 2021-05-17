class Buffalo {
    constructor(
        name = '',
        weight = 0,
        gender = '',
        typicalMood = '',
        hieghtInMeters = 0,
    ) {
        this.id = 0,
            this.name = name;
        this.weight = weight;
        this.gender = gender;
        this.typicalMood = typicalMood;
        this.hieghtInMeters = hieghtInMeters;
    }
    eat(food) {
        console.log(`Chomp chomp all the ${food}ies.`)
    }
}

export default Buffalo;