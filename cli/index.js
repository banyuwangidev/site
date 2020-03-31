#!/usr/bin / env node

const cli = require("clui")
const fs = require("fs-extra")
const process = require("process")
const spawn = require("child_process").spawn
const Spinner = cli.Spinner
const clear = require("clear")
const chalk = require("chalk")
const inquirer = require("inquirer")
const figlet = require("figlet")
const contributorList = require("../contents/contributors")
const { blueprintPost, formatDate, contributorsTemplate } = require("./config")
let id
// initializes and displays the welcome screen
const banner = () => {
  clear()
  console.log(
    chalk.green(
      figlet.textSync("BADEV", {
        horizontalLayout: "full",
      })
    )
  )
}

const success = () => console.log(chalk.green.bold(`Selesai ✨`))

const timeout = (action, duration = 1000) => {
  console.log(chalk.yellowBright.bold(`🛵  Redirect ke menu utama... `))
  id = setTimeout(() => action(), duration)
}

// 1. membuat post
const createPost = async (title, username) => {
  // create file on content
  const spinnerPost = new Spinner("Membuat post...")
  spinnerPost.start()
  const date = formatDate(new Date())
  const transformTitle = `${date}-${String(title)
    .split(" ")
    .join("-")
    .toLowerCase()}`

  await fs.ensureDir(`contents/posts/${transformTitle}/images`)
  await fs.writeFile(
    `contents/posts/${transformTitle}/index.mdx`,
    blueprintPost(title, username, date)
  )
  spinnerPost.stop()
}

const checkUsername = async username => {
  return contributorList.find(
    contributor => contributor.github === `${username}`
  )
}

const checkPostsFolder = async () => {
  const spinner = new Spinner("Checking directory folder...")
  spinner.start()
  const exists = await fs.pathExists("contents/posts")
  if (exists) {
    spinner.stop()
  } else {
    console.log(chalk.red.bold("folder tidak ditemukan"))
    spinner.stop()
  }
}

const askActions = () => {
  const questions = [
    {
      name: "ENV",
      type: "list",
      choices: ["Membuat post", "Menambah kontributor", "Keluar"],
      message: "Pilih aksi membuat post atau menambah contributor ?",
      filter: function(val) {
        return val === "Membuat post"
          ? "post"
          : val === "Menambah kontributor"
          ? "contributor"
          : "keluar"
      },
    },
  ]
  return inquirer.prompt(questions)
}

const askName = () => {
  const questions = [
    {
      name: "username",
      type: "input",
      message: "Masukkan username github kamu",
    },
  ]
  return inquirer.prompt(questions)
}

const askTitle = () => {
  const questions = [
    {
      name: "title",
      type: "input",
      message: "Masukkan judul post kamu",
    },
  ]
  return inquirer.prompt(questions)
}

// 2. Membuat kontributor
const createContributor = async () => {
  clear()
  banner()
  const questions = [
    {
      name: "name",
      type: "input",
      message: "Masukkan nama kamu",
    },
    {
      name: "github",
      type: "input",
      message: "Masukkan usename github kamu",
    },
    {
      name: "site",
      type: "input",
      message: "Masukkan alamat situsmu jika ada (kosongi jika tidak ada)",
      default: function() {
        return ""
      },
    },
    {
      name: "bio",
      type: "input",
      message: "Masukkan bio kamu",
      default: function() {
        return ""
      },
    },
  ]

  const spinnerName = new Spinner("Mengecek ketersediaan username")
  const { username } = await askName()
  spinnerName.start()
  const resUsername = await checkUsername(username)

  if (resUsername === undefined) {
    clear()
    banner()
    spinnerName.stop()
    const answers = await inquirer.prompt(questions)
    contributorList.push({ ...answers, github: `${answers.github}` })
    const newContributor = contributorsTemplate(contributorList)
    await fs.writeFile("contents/contributors/index.js", newContributor)
    const spinnerExecute = new Spinner("Rebuild cache...")
    spinnerExecute.start()
    const process = spawn("yarn clean", { shell: true })
    console.log(
      chalk.greenBright.bold("Jalankan kembali gatsby dengan npm run start")
    )
    process.on("exit", () => {
      spinnerExecute.stop()
      success()
      timeout(execute)
    })
  } else {
    spinnerName.stop()
    console.log(chalk.greenBright.bold("Data contributor sudah ada. \n"))
    timeout(execute)
  }
}

async function execute() {
  banner()
  await checkPostsFolder()
  const answer = await askActions()
  const { ENV } = answer
  if (ENV === "post") {
    const answer = await askName()
    const { username } = answer
    const spinnerName = new Spinner("Mengecek ketersediaan username")
    spinnerName.start()
    const resUsername = await checkUsername(username)
    if (resUsername !== undefined) {
      spinnerName.stop()
      const { title } = await askTitle()
      await createPost(title, username)
    } else {
      spinnerName.stop()
      await createContributor()
    }
  } else if (ENV === "contributor") {
    await createContributor()
  } else {
    clearTimeout(id)
    process.exit
  }
}

execute()