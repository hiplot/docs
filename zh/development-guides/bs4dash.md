# bs4dash 应用开发指南

```r
# load packages
pacman::p_load(shiny)
pacman::p_load(bs4Dash)


# ui.R
## Shiny UI 第一级元素
?shiny::fluidPage
?bs4Dash::bs4DashPage

## Shiny UI 第二级元素
?shiny::titlePanel
?shiny::sidebarLayout
?shiny::mainPanel
?bs4Dash::bs4DashNavbar
?bs4Dash::bs4DashControlbar
?bs4Dash::bs4DashFooter
?bs4Dash::bs4DashBody

## Shiny UI 第三级元素
?shiny::sidebarPanel
?bs4Dash::bs4SidebarMenu
?bs4Dash::bs4TabItems

## Shiny UI 第四级元素
?bs4Dash::bs4TabItem

## Shiny UI 第五级元素
?bs4Dash::fluidRow

## Shiny UI 第六级元素
?bs4Dash::bs4Box
?bs4Dash::bs4Accordion
?bs4Dash::bs4AccordionItem
?bs4Dash::bs4Alert
?bs4Dash::bs4Badge
?bs4Dash::bs4Callout
?bs4Dash::bs4Card
?bs4Dash::bs4CardLabel
?bs4Dash::bs4CardLayout
?bs4Dash::bs4CardSidebar
?bs4Dash::bs4Carousel
?bs4Dash::bs4CarouselItem
?bs4Dash::bs4CloseAlert
?bs4Dash::bs4DropdownMenu
?bs4Dash::bs4DropdownMenuItem
?bs4Dash::bs4HideTab
?bs4Dash::bs4InfoBox
?bs4Dash::bs4InsertTab
?bs4Dash::bs4Jumbotron
?bs4Dash::bs4ListGroup
?bs4Dash::bs4ListGroupItem
?bs4Dash::bs4Quote
?bs4Dash::bs4SocialCard
?bs4Dash::bs4Timeline
?bs4Dash::bs4Table
?bs4Dash::bs4Toast
?bs4Dash::bs4UserCard
?bs4Dash::bs4ValueBox

## Shiny UI 具体展示组件
?shiny::checkboxGroupInput
?shiny::checkboxInput
?shiny::dateInput
?shiny::dateRangeInput
?shiny::fileInput
?shiny::numericInput
?shiny::passwordInput
?shiny::restoreInput
?shiny::selectInput
?shiny::selectizeInput
?shiny::sliderInput
?shiny::snapshotPreprocessInput
?shiny::textAreaInput
?shiny::textInput
?shiny::varSelectInput
?shiny::varSelectizeInput
?shiny::downloadButton
?shiny::downloadLink

## Shiny output functions
?shiny::dataTableOutput
?shiny::getCurrentOutputInfo
?shiny::htmlOutput
?shiny::imageOutput
?shiny::plotOutput
?shiny::snapshotPreprocessOutput
?shiny::tableOutput
?shiny::textOutput
?shiny::uiOutput
?shiny::verbatimTextOutput
?DT::dataTableOutput
?DT::DTOutput

## bs4Dash是基于Shiny + Bootstrap4扩展而来，
## 所以Shiny的UI组件可以在library(bs4Dash)后直接使用

## 合理使用htmltools包提供的tags下的html标签创建自定义的组件（可CSS语法美化）
## 如tags$h1("Hello H1",style="font-size:12px;font-weight:bold;color:black;")

## 合理使用include
includeCSS()	Include Content From a File
includeHTML()	Include Content From a File
includeMarkdown()	Include Content From a File
includeScript()	Include Content From a File
includeText()	Include Content From a File
```

```r
# server.R
?shiny::renderCachedPlot
?shiny::renderDataTable
?shiny::renderImage
?shiny::renderPlot
?shiny::renderPrint
?shiny::renderTable
?shiny::renderText
?shiny::renderUI
?DT::renderDT

# 使用renderUI()可以实现较为强大的功能：
# 1.将数据的列读为新的变量提供给slecteInput()的choice()的参数；
# 2.在Server端设置组件在UI端渲染

# 合理使用react():
# 1.实现数据动态读取和绘图，同步渲染；
# 2.响应式数据：func <- reactive(data)，响应式应用：func()
```