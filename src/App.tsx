import logo from './assets/svg/logo.svg'

import './App.css'

export const App = () => (
  <div className="App">
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <p>
        I hope you enjoy using our boilerplate, we set it up thinking about
        optimizing your studies :)
      </p>
      <p>
        Edit <code>App.tsx</code> and save to test HMR updates.
      </p>
      <p>
        Developed by{' '}
        <a
          href="https://github.com/anddersonrds"
          target="_blank"
          rel="noreferrer"
        >
          @anddersonrds
        </a>
        .
      </p>
    </header>
  </div>
)
