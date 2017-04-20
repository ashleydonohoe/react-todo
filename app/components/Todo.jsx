var React = require('react');
let moment = require("moment");

var Todo = React.createClass({
    render: function () {
        var {id, text, completed, createdAt, completedAt} = this.props;

        let renderDate = () => {
            let message = "Created ";
            let timestamp = createdAt;

            if(completed) {
                message = "Completed ";
                timestamp = completedAt;
            }

            return message + moment.unix(timestamp).format("MMM D, YYYY @ h:mm A");
        };

        return (
            <div onClick={() => {
                this.props.onToggle(id);
            }}>
                <input type="checkbox" checked={completed}/>
                <p>{text}</p>
                <p>{renderDate()}</p>
            </div>
        )
    }
});

module.exports = Todo;
