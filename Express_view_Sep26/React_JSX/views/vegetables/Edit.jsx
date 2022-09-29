const React = require('react')
const DefaultLayout = require('../layouts/DefaultLayout')

class Edit extends React.Component {
    render(){
        let {vegetable} =this.props
        
        return(
            <DefaultLayout title="Edit a Vegetable" foodGroup="vegetables">
                <h1>Edit Page for a Vegetable</h1>
                <form action={`/vegetables/${vegetable._id}?_method=PUT`} method="POST">

                    <label htmlFor="name">Name:</label>
                    <input type="text" name='name' defaultValue={vegetable.name} />

                    <label htmlFor="type">Type:</label>
                    <input type="text" name='color' defaultValue={vegetable.color} />

                    <input type="submit" value="Edit Vegetable"/>
                </form>
            </DefaultLayout>

        )
    }
}

module.exports = Edit