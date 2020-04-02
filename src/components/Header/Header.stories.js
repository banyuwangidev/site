import React from 'react'
import { action } from "@storybook/addon-actions"

import Header from './index'
import headerMenu from '../../shared/headerMenu'

export default {
    component: Header,
    title: "Design System/Header",
}

const headerData = {
    title: "Banyuwangi DEV",
    crumbs: [],
    menus: headerMenu
}

const headerBreadCrumb = {
    title: "Banyuwangi DEV",
    crumbs: ["contributor","Fahmi Irsyad Khairi"],
    menus: headerMenu
}

export const Default = () => <Header {...headerData} />
export const BreadCrumb = () => <Header {...headerBreadCrumb} />