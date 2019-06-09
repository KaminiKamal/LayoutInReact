import React, { Component } from "react";
import ReactDOM from "react-dom";
import InputBox from "../Components/Input/InputBox.js";
import TextArea from "../Components/TextArea/TextArea.js";
import Button from "../Components/Button/Button.js";
import DivButton from "../Components/DivButton/DivButton.js";
export default class CreateBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      description: "",
      productList: [
        {
          index: 0
        }
      ]
    };
  }

  submitFinalValue = e => {
    //  console.log("this.state", this.state, this.props);
    this.props.submitItem(this.state);
  };
  addNewLists = e => {
    let productList = this.state.productList;
    productList.push({
      index: this.state.productList.length++
    });
    this.setState({
      productList: productList
    });
  };
  render() {
    return (
      <div>
        <h5>CREATE ITEM</h5>
        <div>
          <div>
            <DivButton
              ref={"add_moc"}
              text={`Add another or Create New MOC`}
              addClass={`miniCardButton`}
              updateValue={this.addNewLists}
            />
          </div>
          {this.state.productList.map((el, i) => (
            <div>
              <div>
                <InputBox
                  type="text"
                  label="Name"
                  isRequired="true"
                  ref={"name"}
                  updateValue={e => {
                    this.setState(
                      {
                        name: ReactDOM.findDOMNode(this.refs.name.refs.input)
                          .value
                      },
                      () => {
                        //this.props.setLQD_LODValues({ lod: this.state.lod });
                      }
                    );
                  }}
                />
              </div>

              <div>
                <TextArea
                  type="text"
                  label="Description"
                  isRequired="true"
                  ref={"description"}
                  updateValue={e => {
                    this.setState(
                      {
                        description: ReactDOM.findDOMNode(
                          this.refs.description.refs.textarea
                        ).textContent
                      },
                      () => {
                        //console.log("state-->", this.state);
                        //this.props.setLQD_LODValues({ lod: this.state.lod });
                      }
                    );
                  }}
                />
              </div>
            </div>
          ))}

          <div>
            <Button
              label={"Update"}
              isRequired={true}
              type={"button"}
              addInputStyle={`button-box-right`}
              updateFinalValue={this.submitFinalValue}
            />
          </div>
        </div>
      </div>
    );
  }
}
