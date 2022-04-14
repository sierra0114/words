function story(){
    let chenfeng=new Organism('chenfeng',38,'hunman');
    let alai=new Organism('alai',Infinity,'cancer'); 
    chenfeng.born()
    alai.born()
}
  //公用常量
  const A_YEAR=31536000000
  //类:有机体 继承自 宇宙930
  class Organism extends universe_930{
    constructor(...args){
      let {name,max_life,organism_type}=args
      this.name=name
      this.max_life=max_life
      this.organism_type=organism_type
    }
    print_prop(prop_name){
      console.log(this[prop_name])
    }
    born(){
      if(this.birthday){
        console.log("非法操作:有机体已经出生")
        return
      }
      this.age=0;
      this.birthday=new Date();
      console.log("born",this.name,"出生了","生日:",Number(this.birthday))
      let life_timer=setInterval(()=>{
        this.age++;
        if(this.age==this.max_life){ this.DEAD=true }
      },A_YEAR)
    }
    get_age(){
      let now=new Date()
      let living_time=now.getTime() - this.birthday.getTime()
      this.age=utils('millisecond_to_year',living_time)
      console.log(this.name,"的年龄:",this.age)
      return this.age
    }
  }
  //工具方法合集
  function utils(func_name,...args){
    if(func_name=="millisecond_to_year"){
      function millisecond_to_year(...args){
        let [millisecond]=args
        let year=millisecond / A_YEAR
        return year;
      }
      millisecond_to_year(...args)
    }
    if(func_name=="Date_to_timestamp"){
      function Date_to_timestamp(...args){
        function formatNumber (n) {
          n = n.toString()
          return n[1] ? n : '0' + n
        }
        let [date]=args
        const year = date.getFullYear()
        const month = date.getMonth() + 1
        const day = date.getDate()
        return [year,month, day].map(formatNumber).join('-')
      }
      Date_to_timestamp(...args)
    }
  }