export default function Login() {
    return (
        <div>
            <h1>It is a Login page</h1>
            <form>
                <label for="email">Email: </label>
                <input type="email" name="email" />
                <br />
                <label for="password">Password: </label>
                <input name="password" type="password"></input>
                <br />
                <button>
                    Sign in
                </button>
            </form>
        </div>
    )
}