export default function Register () {
    return (
        <div>
            <h1>It is Register page</h1>
            <form>
                <label for="email">Email: </label>
                <input type="email" name="email" />
                <br />
                <label for="email">Firstname: </label>
                <input type="text" name="firstname" />
                <br />
                <label for="email">Lastname: </label>
                <input type="text" name="lastname" />
                <br />
                <label for="password">Password: </label>
                <input name="password" type="password"></input>
                <br />
                <label for="password">Confirm Password: </label>
                <input name="password" type="password"></input>
                <br />
                <button>
                    Register
                </button>
            </form>
        </div>
    )
}