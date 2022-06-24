import React from 'react'

function Formikcontrol(props) {
    const{control} = props
    switch(control){
        case 'input':
            case 'textarea':
                case 'select':
                    case 'checkbox':
                        case 'date':
                            default: return null
    }

}

export default Formikcontrol