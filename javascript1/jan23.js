var Dog={
    name: "Bluey",
    breed:"German Shephard",
    age:5,

    eat: function(){
        console.log(name+ "is eating");
    },

    sleep: function(){
        console.log(name+ "is of "+age , "so he sleeps at 11pm");
    }
}

var Dog=new Dog();
Dog["age"];
Dog.breed;
Dog.sleep();
Dog.eat();