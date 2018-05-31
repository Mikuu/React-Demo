import React, {Component} from 'react';

class Editor extends Component {

    constructor(props) {
        super(props);
        this.onSelectOption = this.onSelectOption.bind(this);
    }

    onSelectOption(e) {
        this.props.onSelect(this.props.optionName, e.target.value);
    }

    render() {

        const editorStyle = {
            styleItem: {float: 'left', margin: '5px'},
            styleSelect: {float: 'left', margin: '15px'}
        };

        let options = this.props.optionValues.map((optionValue) => {
            return <option value={optionValue}>{optionValue}</option>
        });

        return (
            <div>
                <div style={editorStyle.styleItem}>{this.props.optionName}</div>
                <select style={editorStyle.styleSelect} onChange={this.onSelectOption}>
                    {options}
                </select>
            </div>
        )
    }
}

class EditorPanel extends Component {
    constructor(props) {
        super(props);
        this.onSelect = this.onSelect.bind(this);

        this.state = {
            backgroundColor: "red",
            height: "100px",
            width: "100px",
        }
    }
    
    onSelect(optionName, optionValue) {

        switch (optionName) {
            case "backgroundColor":
                this.setState({
                    backgroundColor: optionValue,
                    height: this.state.height,
                    width: this.state.width,
                });
                break;
            case "height":
                this.setState({
                    backgroundColor: this.state.backgroundColor,
                    height: optionValue,
                    width: this.state.width,
                });
                break;
            case "width":
                this.setState({
                    backgroundColor: this.state.backgroundColor,
                    height: this.state.height,
                    width: optionValue,
                });
                break;
            default:
                console.log("FBI --> nothing to handle.")

        }
    }

    render() {
        let options = [
            {optionName: "backgroundColor", optionValues: ["red", "blue", "green"]},
            {optionName: "height", optionValues: ["100px", "300px", "800px"]},
            {optionName: "width", optionValues: ["100px", "300px", "800px", "1200px"]}
        ];

        let styleColorBlock = {
            backgroundColor: this.state.backgroundColor,
            width: this.state.width,
            height: this.state.height
        };

        return (
            <div>
                <Editor onSelect={this.onSelect} optionName={options[0].optionName} optionValues={options[0].optionValues}/>
                <Editor onSelect={this.onSelect} optionName={options[1].optionName} optionValues={options[1].optionValues}/>
                <Editor onSelect={this.onSelect} optionName={options[2].optionName} optionValues={options[2].optionValues}/>
                <table>
                    <tr>
                        <td>
                            <div id="color-block" style={styleColorBlock}/>
                        </td>
                    </tr>
                </table>
            </div>
        )
    }
}

export default EditorPanel;
