import React from 'react'
import { action } from "@storybook/addon-actions"

import Header from './index'

export default {
    component: Header,
    title: "Design System/Header",
}

const headerData = {
    title: "Banyuwangi DEV"
}

export const Default = () => <Header {...headerData} />