import React from 'react'
import { action } from "@storybook/addon-actions"

import Header from './index'

export default {
    component: Header,
    title: "Design System/Header",
}

const headerData = {
    title: "Banyuwangi DEV",
    crumbs: []
}

const headerBreadCrumb = {
    title: "Banyuwangi DEV",
    crumbs: ["contributor","Fahmi Irsyad Khairi"]
}

export const Default = () => <Header {...headerData} />
export const BreadCrumb = () => <Header {...headerBreadCrumb} />