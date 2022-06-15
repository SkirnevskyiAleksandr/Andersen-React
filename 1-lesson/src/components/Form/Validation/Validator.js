import React from "react";

class Validator extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            fields: {},
            errors: {}
        };
    }
}

export default Validator;