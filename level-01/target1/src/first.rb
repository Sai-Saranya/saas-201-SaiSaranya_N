class MySchool
    def initialize(id,name)
        @id=id;
        @name=name;
    end
    def put
        puts "ID is #@id"
        puts "Name is #@name"
    end
end
myschool=MySchool.new(123,"SARANYA");
myschool.put();
