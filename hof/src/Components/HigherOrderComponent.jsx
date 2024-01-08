import React from "react";
export default class HigherOrderComponent extends React.Component{
    constructor(){
        super();
        this.state = {
            userData: [
                { id: '1', name: 'Joe', user_type: 'Developer', age:31, years:11 },
                { id: '2', name: 'Hill', user_type: 'Designer', age:26, years:4 },
                { id: '3', name: 'John', user_type: 'Teacher', age:24, years: 2},
                { id: '4', name: 'Sam', user_type: 'Entreprenuer', age:58,years:25},
                { id: '5', name: 'Jack', user_type: 'Designer', age:43, years: 18}
            ],
            filterUsingUserType:[],
            filterUsingFirstLetter:[],
            filterUsingAge:[],
            totalYears:0
        }
        let filteredDataUserType = this.state.userData.filter((el,id,arr)=>{
            if(el.user_type == "Designer"){
                this.state.filterUsingUserType.push(el)
            }
        })
        let filteredDataFirstLetter = this.state.userData.filter((el,id,arr)=>{
            if(el.name[0]=="J"){
                this.state.filterUsingFirstLetter.push(el)
            }
        })
        let filteredDataUsingAge = this.state.userData.filter((el,id,arr)=>{
            if(el.age>28 && el.age<=50){
                this.state.filterUsingAge.push(el)
            }
        })
        let total = this.state.filterUsingUserType.reduce((acc,el,id,arr)=>{
            return acc+el.years;
        },0)
        this.state.totalYears=total;
    }
    render(){
        return(
            <>
            <h1>Display Items</h1>
            {
                this.state.userData.map((el,id,arr)=>(
                    <div key={el.id} style={{border:"1px solid black", color:"blue"}}>
                        Id : {el.id}
                        Name : {el.name}
                        User Type : {el.user_type}
                    </div>
                ))
            }
            <h1>Filtering Users on User Type</h1>
           {
            this.state.filterUsingUserType.map((el,id,arr)=>(        
            <div key={el.id} style={{border:"1px solid black", color:"blue"}}>
                Id={el.id}
                Name={el.name}
                User Type={el.user_type}
            </div>
            ))
           }
            <h1>Filtering Users on first letter J</h1>
           {
            this.state.filterUsingFirstLetter.map((el,id,arr)=>(        
            <div key={el.id} style={{border:"1px solid black", color:"blue"}}>
                Id={el.id}
                Name={el.name}
                User Type={el.user_type}
            </div>
            ))
           }
            <h1>Filtering Users on basis of Age</h1>
           {
            this.state.filterUsingAge.map((el,id,arr)=>(        
            <div key={el.id} style={{border:"1px solid black", color:"blue"}}>
                Id={el.id}
                Name={el.name}
                User Type={el.user_type}
            </div>
            ))
           }
           <h1>Total Experience of Designers</h1>
           {
            <div style={{border:"1px solid black", color:"blue"}}>
                Experience = {this.state.totalYears} years
            </div>
           }
            </>
        )
    }
}