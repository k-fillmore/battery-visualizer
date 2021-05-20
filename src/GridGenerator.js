import React from "react";
import { ListGroup } from 'react-bootstrap'

export default class GridGenerator extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            series: 0,
            paralell: 0,
            cellList: [],
            showGrid: false,
            errors: {},
        };
        
        this.findPartition = this.findPartition.bind(this);
    }

    findPartition(nums, k, p) {
        var total_values = 0
        nums.sort()
        nums.reverse()
        const sums = [];
        var output = []
        var i;
        for(i = 0; i<k; i++){
            sums[i] = 0
            //console.log(sums)
            output.push([])
        }
        //console.log(output)
        nums.forEach(function(num){
            var target = sums.indexOf(Math.min.apply(Math, sums))
            //console.log(target, num)
            //console.log(sums)
            
            if (total_values !== k*p){
                sums[target] += num
                output[target].push(num)
                total_values++ 
            }
        
        })
        output.forEach(function(array){
            if(array.length < p){
                for(i = array.length; i < p; i++){
                    array[i] = 0
                }
            }
        })
        return output;
    }

   

   render(){
    const array1 = this.props.cellList.split(",").map(function(item) {
        if (isNaN(parseInt(item, 10))){
            return 0;
        }
        return parseInt(item, 10);
    });
    const packLayout = this.findPartition(array1,this.props.series,this.props.parallel)
    this.state.cellList = packLayout;
    
    return (
        <div>
            {this.state.cellList.map((seriesArray, yindex) => {
                return(
                <>
                <h2>Cell {yindex+1} </h2>
                <p>Total Capacity: {seriesArray.reduce((a, b) => a + b, 0)}</p>
                <ListGroup horizontal>
                {seriesArray.map((value, index) => {
                    if (value > 0){
                        return (
                        <ListGroup.Item action >{value}</ListGroup.Item>
                        )
                    } else {
                        return (<ListGroup.Item action variant="danger">{value}</ListGroup.Item>)}
                
                })}
               </ListGroup>
               </>
                )
            })}
            
        </div>
    )
}
}
