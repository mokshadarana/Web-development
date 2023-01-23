var emp={
    id,
    name,
    salary,

    emp(id,name,salary){
        this.id=id;
        this.name=name;
        this.salary=salary;
    },

    work: function(){
        console.log("This employee is working")
    }

}

var employee =new emp(80, "Bluey", 30000);
employee