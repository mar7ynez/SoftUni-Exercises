function cats(arrOfStr) {

    class Cat {
        constructor(name, age) {
            this.name = name;
            this.age = age;

        }
        meow() {
            console.log(`${this.name}, age ${this.age} says Meow`);

        }
    }

    for (let cat of arrOfStr) {
        let [name, age] = cat.split(' ');
        let curCat = new Cat(name, age);

        curCat.meow();

    }
}
cats(['Mellow 2', 'Tom 5']);