import React, { FC } from "react"

const currentYear = new Date().getFullYear()

const Footer: FC = () => (
  <footer className="text-center mt-4">
    <p className="mb-0 text-dark">
      <small>
        &copy; Yuku Takahashi {currentYear} - This work is licensed under a{" "}
        <a href="https://creativecommons.org/licenses/by-nc-sa/4.0/">CC BY-NC-SA 4.0 </a>
      </small>
    </p>
  </footer>
)

export default Footer
