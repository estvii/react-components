import React from 'react';
import ReactDOM from 'react-dom'
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

const App = () => {
    return(
        <div className="ui container comments">
        <ApprovalCard>
            <CommentDetail author="sam" timeAgo="Today at 4:45pm" content="Wow nice" avatar={faker.image.avatar()} />
        </ApprovalCard>
        <ApprovalCard>
            <CommentDetail author="alex" timeAgo="Today at 2:45pm" content="Wow nice!" avatar={faker.image.avatar()} />
        </ApprovalCard>
        <ApprovalCard>
            <CommentDetail author="jane" timeAgo="Yesterday at 1:45pm" content="Wow nice!!"avatar={faker.image.avatar()}/>
        </ApprovalCard>
        <ApprovalCard>
            <CommentDetail author="bob" timeAgo="Today at 2:45am" content="Wow nice!!" avatar={faker.image.avatar()}/>
        </ApprovalCard>
        </div>
    );
}

ReactDOM.render(
    <App/>,
    document.querySelector('#root')
)