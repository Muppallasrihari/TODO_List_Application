import React from 'react';
import IssueForm from './IssueForm';
import IssueNameComponent from './IssueNameComponent';

class IssueListComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            issues: [
                // 
            ],
                currentIssue:''
        }
        this.changeStatus=this.changeStatus.bind(this);
        this.updateIssue=this.updateIssue.bind(this);
        this.addIssue=this.addIssue.bind(this);
        this.deleteIssue=this.deleteIssue.bind(this);
        this.editIssue=this.editIssue.bind(this);
    }

    addIssue(event){
        event.preventDefault();
        let issues=this.state.issues;
        let currentIssue=this.state.currentIssue;
        issues.push({
            name:currentIssue,
            completed:false

        });
        this.setState({
            issues:issues,
            currentIssue:''
        });

    }
    updateIssue(newValue){
        this.setState({
            currentIssue:newValue.target.value
        });
    }

    deleteIssue(indexToBeDeleted){
        let issues=this.state.issues;
        issues.splice(indexToBeDeleted,1);
        this.setState({
            issues:issues
        });
    }

    editIssue(index,valueToEdit){
        let issues=this.state.issues;
        let currentIssue=issues[index];
        currentIssue['name']=valueToEdit;
        this.setState({
            issues:issues
        });

    }

    changeStatus(index){
        var issues=this.state.issues;
        var issue=issues[index];
        issue.completed=!issue.completed;
        this.setState({
            issues:issues
        })
      
    }
    render() {
        return (
            <div className="container">
                <h1 className="display-4 mt-2 text-center">Issue Tracker App</h1>
                <IssueForm
                updateIssue={this.updateIssue}
                currentIssue={this.state.currentIssue}
                addIssue={this.addIssue}
                />
                <ul className="list-group-flush">
                    {
                        this.state.issues.map((issue,index)=> {
                            return (<IssueNameComponent 
                                key={issue.name} 
                                issue={issue} 
                                onClickEventHandler={this.changeStatus}
                                deleteIssue={this.deleteIssue}
                                index={index}
                                editIssue={this.editIssue}/>);
                        })
                    }

                </ul>
            </div>
        )
    }
}
export default IssueListComponent;