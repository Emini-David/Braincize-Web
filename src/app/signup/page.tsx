import pagestyle from "@/app/signup.module.css";



export default function Signup() {
  return (
    <>
      <div className={pagestyle.container}>
        <div className={pagestyle.left_panel}>
          <div className={pagestyle.overlay_text}>
            <h2>
              An AI‑powered
              <br />
              neuroimaging tool
            </h2>
          </div>
        </div>

        <div className={pagestyle.right_panel}>
          <div className={pagestyle.card}>
            <h1>Create Account</h1>
            <form>
              <div className={pagestyle.name_group}>
                <div className={pagestyle.input_wrapper}>
                  <label htmlFor="firstName">First Name</label>
                  <input type="text" id="firstName" name="firstName" />
                </div>
                <div className={pagestyle.input_wrapper}>
                  <label htmlFor="lastName">Last Name</label>
                  <input type="text" id="lastName" name="lastName" />
                </div>
              </div>

              <div className={pagestyle.input_wrapper}>
                <label htmlFor="email">Email Address</label>
                <input type="email" id="email" name="email" />
              </div>

              <div className={pagestyle.input_wrapper}>
                <label htmlFor="password">Password</label>
                <input type="password" id="password" name="password" />
              </div>

              <button type="submit" className={pagestyle.btn_primary}>
                Create Account
              </button>

              <p className={pagestyle.small_text}>
                Already have an account? <a href="/login">Login</a>
              </p>

              <div className={pagestyle.divider}>
                <span>or</span>
              </div>

              <div className={pagestyle.social_buttons}>
                <button type="button" className={pagestyle.btn_social}>
                 <svg
      width="32"
      height="32"
      viewBox="0 0 320 512"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S293.67 0 262.4 0c-73.22 0-121.1 44.38-121.1 124.72v70.62H89.33V288h52v224h100.2V288z" />
    </svg> Signup with Facebook
                </button>
                <button type="button" className="btn-social google">
                  <i className="fab fa-google" /> Signup with Google
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
        integrity="sha512-papYx+v1G7b/0B1QXK9G5T+8oxB6v3MCB5c/9gkPZQD9mQ/51rwj6qxgTfEaO1i7b2ZjI3P0kM4rXrvoWQ5hPQ=="
        crossOrigin="anonymous"
        referrerPolicy="no-referrer"
      /> */}
    </>
  );
}
