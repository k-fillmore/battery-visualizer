import React from 'react'
import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'
import GridGenerator from './GridGenerator'
/*tslint:disabled*/
export default class InputComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            series: 0,
            parallel: 0,
            cellList: "",
            showGrid: false,
            errors: {},
        };
        this.onSeriesChange = this.onSeriesChange.bind(this);
        this.onParallelChange = this.onParallelChange.bind(this);
        this.onCellListChange = this.onCellListChange.bind(this);
        this.onGenerate = this.onGenerate.bind(this);
        this.onToggleGrid = this.onToggleGrid.bind(this);
        this.onExampleData = this.onExampleData.bind(this);
        this.onResetData = this.onResetData.bind(this);
       
    }
    onResetData(){
        this.setState({
            series: "",
            parallel: "",
            cellList: "",
            showGrid: false,})
    }
    onGenerate(){
        this.setState({showGrid: true})
        this.setState({
            series: this.state.series,
            parallel: this.state.parallel,
            cellList: this.state.cellList,
            showGrid: true,})
        console.log(this.state.showGrid)
    }
    onExampleData(){
        this.setState({showGrid: true})
        this.setState({
            series: 4,
            parallel: 2,
            cellList: "3093,3018,3318,3242,3102,3098,3364,3423",})
    }
    onToggleGrid(){
        if (this.state.showGrid === false){
            this.setState({showGrid: true})
        } else if (this.state.showGrid === true){
            this.setState({showGrid: false})
        }

    }
    onSeriesChange(event) {
        let strInput = event.target.value;
        let errors = {};
        let formIsValid = true;
        
        if(!strInput.match(/^[0-9]*$/) & isNaN(event.target.value)){
            formIsValid = false;
            errors["Series"] = "Invalid Input";
         }
         this.setState({errors: errors})
         if(formIsValid){
            this.setState({ series: event.target.value });
         }
        console.log(this.state.series)
        }
    onParallelChange(event) {
        let strInput = event.target.value;
        let errors = {};
        let formIsValid = true;
        
        if(!strInput.match(/^[0-9]*$/) & isNaN(event.target.value)){
            formIsValid = false;
            errors["Parallel"] = "Invalid Input";
         }
         console.log(errors["Parallel"] )
         this.setState({errors: errors})
         if(formIsValid){
             
            this.setState({ parallel: event.target.value });
         }
        }
    onCellListChange(event) {
        let strInput = event.target.value;
        let errors = {};
        let formIsValid = true;

        if(!strInput.match(/^\d+(,\d+)*$/) & !strInput.match(/^\d+(,\d+)*[,]$/) & isNaN(event.target.value)){
            formIsValid = false;
            errors["Cell List"] = "Please enter a comma separated list of cell capacities without spaces.(Example: 111,222,333,444)";
         }
        this.setState({errors: errors})
        if (formIsValid){
            console.log(event.target.value)
            this.setState({ cellList: event.target.value });
            }
        }
    render(){
    let finalPack;
    
    if(this.state.showGrid === true){
        finalPack = <GridGenerator series={this.state.series} parallel={this.state.parallel} cellList={this.state.cellList} />
    }
    return (
        <>
        <div className="input">
            
            <InputGroup className="mb-3">
              <InputGroup.Prepend>
                <InputGroup.Text id="basic-addon2">
                  Series Count:
                </InputGroup.Text>
              </InputGroup.Prepend>
              <FormControl
                aria-label="Recipient's username"
                aria-describedby="basic-addon2"
                onChange={this.onSeriesChange}
                value={this.state.series}
              />
              </InputGroup>
              <div style={{color: "red"}}>{this.state.errors["Series"]}</div>
              <InputGroup className="mb-3">
              <InputGroup.Prepend>
                <InputGroup.Text
                  id="basic-addon2"
                  
                >
                  Paralell Count:
                </InputGroup.Text>
              </InputGroup.Prepend>
              <FormControl
                aria-label="Recipient's username"
                aria-describedby="basic-addon2"
                onChange={this.onParallelChange}
                value={this.state.parallel}
              />
            </InputGroup>
            <div style={{color: "red"}}>{this.state.errors["Parallel"]}</div>
            <InputGroup className="mb-3">
              <InputGroup.Prepend>
                <InputGroup.Text id="basic-addon2">
                  Cell Capacities
                </InputGroup.Text>
              </InputGroup.Prepend>
              <FormControl 
                as="textarea" 
                aria-label="With textarea"
                onChange={this.onCellListChange}
                value={this.state.cellList} />
            </InputGroup>
            <div style={{color: "red"}}>{this.state.errors["Cell List"]}</div>
            
            <div class="col-md-12 text-center">
                <Button variant="dark" onClick={this.onGenerate}  >Generate Pack</Button>{" "}
                <Button variant="dark" onClick={this.onExampleData} >Example Data</Button>{" "}
                <Button variant="dark" onClick={this.onResetData} >Reset</Button>{" "}
            </div>
       
        
        </div>
        <div className="finalPack"> {finalPack}</div>
        </>
    )
}}

