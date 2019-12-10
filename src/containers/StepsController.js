import React from 'react';
import { connect } from 'react-redux';
import { saveValue } from './../redux/actions/input'; 
import { Slide0 } from './../components/slides/Slide0';
import { Slide1 } from './../components/slides/Slide1';
import { Slide2 } from './../components/slides/Slide2';
import { Slide3 } from './../components/slides/Slide3';
import { Slide4 } from './../components/slides/Slide4';
import { Slide5 } from './../components/slides/Slide5';
import { Slide6 } from './../components/slides/Slide6';
import { Slide7 } from './../components/slides/Slide7';
import { Slide8 } from './../components/slides/Slide8';
import { Slide9 } from './../components/slides/Slide9';
import { Slide10 } from '../components/slides/Slide10';
import { Slide11 } from './../components/slides/Slide11';
import { Slide12 } from './../components/slides/Slides12';




class StepsController extends React.Component {
    constructor() {
        super();
        this.state = {
            data: {}
        }

        this.updateData = (field, value) => {
            const { data } = this.state;

            data[field] = value;
            this.setState({ data })
        }
    }
    
    render() {
        const { step} = this.props;
        let Slide;
        switch (step) {
            case 0: {
                Slide = Slide0;
                break;
            }
            case 1: {
                Slide = Slide1;
                break;
            }
            case 2: {
                Slide = Slide2;
                break;
            }
            case 3: {
                Slide = Slide3;
                break;
            }
            case 4: {
                Slide = Slide4;
                break;
            }
            case 5: {
                Slide = Slide5;
                break;
            }
            case 6: {
                Slide = Slide6;
                break;
            }
            case 7: {
                Slide = Slide7;
                break;
            }
            case 8: {
                Slide = Slide8;
                break;
            }
            case 9: {
                Slide = Slide9;
                break;
            }
            case 10: {
                Slide = Slide10;
                break;
            }
            case 11: {
                Slide = Slide11;
                break;
            }
            case 12: {
                Slide = Slide12;
                break;
            }
            default: {
                Slide = () => <div>Empty</div>;
            }
        }
        return (
            <div>
                <button onClick={() => this.props.saveValue("test")}></button>
                <Slide dataCallback={this.updateData} data={this.state.data} />
            </div>
        );
    }
}

const mapStateToProps = state => ({
    value: state.inputReducer.value
})

const mapDispatchToProps = dispatch => ({
    saveValue: value => dispatch(saveValue(value))
})
 
export default connect(mapStateToProps, mapDispatchToProps)(StepsController); 


