const React = require('react')
const DefaultLayout = require('../layouts/DefaultLayout')

class New extends React.Component {
    render() {
        return (
            <DefaultLayout title='create a new vegetable ' foodGroup = "vegetables ">
                <h1>Create New Vegetable Page</h1>
                <form action="/vegetables" method='POST'>
                    <label htmlFor='name'>Name:</label>
                    <input type='text' name='name'></input>

                    <label htmlFor='color'>Color:</label>
                    <input type='text' name='color'></input>

                    <input type='submit' value="Create a Vegetable"></input>
                </form>
            </DefaultLayout>
        ) 
    }
}

module.exports = New