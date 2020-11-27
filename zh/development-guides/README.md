# 网站工具类型及其组件

Hiplot 网站工具主要分为三种：

1. Vue.js 前端 + R/其他后端程序 （可以使用 hctl 调用）
2. Shiny 应用
3. 纯前端应用（不依赖后台程序）

- 第一种：[火山图](/basic/volcano), [气泡图](/basic/bubble), [箱式图](/basic/boxplot)
- 第二种：[UCSCXenaShiny](/advance/ucsc-xena-shiny), [Gene ID Convertor](/advance/gene-ids), [SMART](/advance/smart)
- 第三种：[sra-explorer](/mini-tools/sra-explorer), [clipboard2markdown](/mini-tools/clipboard2markdown), [online-encode-decode](/mini-tools/online-encode-decode)

## Meta JSON 格式说明

大部分 Hiplot 网站工具插件均需要提供 Meta JSON 文件，方便用户对工具进行检索、分类和查询元信息。文件格式如下代码库所示。其中 `name`、`intro`、`src`、`href`、`meta` 为必须字段，分别表示工具插件的名字、一句话简介、封面图、网站访问路径（不能重复）、其他元信息。该文件可以被自动渲染为卡片和右侧文档信息。

其他元信息（meta）包括：`score`、`author`、`email`、`issues`、`citation`、`releaseDate`、`updateDate` 等字段，分别表示该工具的评分、作者、邮箱、问题反馈页面、引用信息、发布日期、更新日期。

```json
  {
    "name": {
      "zh_cn": "Sigflow",
      "en": "Sigflow"
    },
    "intro": {
      "zh_cn": "突变 Signature 分析",
      "en": "Mutation Signature Analysis."
    },
    "src": "https://s1.imagehub.cc/images/2020/08/31/3-a6RT9P-tuya.jpg",
    "href": "/advance/sigflow",
    "tag": ["vue", "mutation"],
    "meta": {
      "score": 5,
      "author": "Hiplot Team | Shixiang Wang",
      "email": "wangshx@shanghaitech.edu.cn",
      "issues": "https://github.com/ShixiangWang/sigminer.workflow",
      "citation": "Sigflow: an automated and comprehensive pipeline for cancer genome mutational signature analysis. Shixiang Wang, Ziyu Tao, Tao Wu, Xue-Song Liu. bioRxiv 2020.08.12.247528; doi: https://doi.org/10.1101/2020.08.12.247528",
      "releaseDate": "2020-08-05",
      "updateDate": "2020-08-05"
    }
  }
```

渲染结果：

![](https://s1.imagehub.cc/images/2020/10/26/meta-json-render.jpg)

## Data JSON 格式说明

该文件仅在开发 Vue.js 前端 + R/其他后端程序时需要，且可以直接作为 `hctl` 命令行程序的输入参数。示例格式如下所示。

```json
# 面积图
{
  "module": "basic",
  "tool": "area",
  "params": {
    "textarea": { "datTable": "" },
    "config": {
      "general": {
        "cmd": "",
        "imageExportType": ["png", "pdf"],
        "size": {
          "width": 4,
          "height": 2.5
        },
        "theme": "theme_bw",
        "palette": "lancet",
        "title": "",
        "alpha": 1
      }
    }
  },
  "exampleData": {
    "config": {
      "general": {
        "title": "Test Area Plot"
      }
    },
    "textarea": {
      "datTable": "group\txaxis.value\tyaxis.value\nGroup1\t1900\t26\nGroup1\t1901\t27\nGroup1\t1902\t10\nGroup1\t1903\t16\nGroup1\t1904\t19\nGroup1\t1905\t18\nGroup1\t1906\t30\nGroup1\t1907\t27\nGroup1\t1908\t23\nGroup1\t1909\t8\nGroup2\t1900\t10\nGroup2\t1901\t10\nGroup2\t1902\t8\nGroup2\t1903\t6\nGroup2\t1904\t9\nGroup2\t1905\t7\nGroup2\t1906\t10\nGroup2\t1907\t6\nGroup2\t1908\t5\nGroup2\t1909\t3\nGroup3\t1900\t20\nGroup3\t1901\t14\nGroup3\t1902\t14\nGroup3\t1903\t14\nGroup3\t1904\t17\nGroup3\t1905\t17\nGroup3\t1906\t10\nGroup3\t1907\t19\nGroup3\t1908\t11\nGroup3\t1909\t18"
    }
  }
}
```

每一个 Data JSON 文件均需包含以下四个字段：

- module (模块名：basic/advance)
- tool (工具名：area/heatmap......)
- params (绘图参数)：包含 `textarea` 和 `config`
- exampleData (示例数据)

`textarea` 与网站的数据表格对应，凡是需要使用数据表格的网站工具，均需包含 `textarea` 字段。

而 `config` 则为其他绘图参数（其中通用参数字段 `general` 为必须）：

- `data`（数据参数）：用于数据输入，存放文件和非表格类字符串类型数据。当输入为文件，且存在与 `textarea` 保持同名，则可以支持表格和文件输入的模式切换。
- `dataArg`（数据列选择）：用于选择数据表指定列，如火山图中的 `Symbol`、`P.Value`、`logFc`。
- `general` (通用参数)：`cmd` 用于后续开发编程接口、`imageExportType` 设置图片导出类型、`size` 控制导出图片的大小、`theme` 为 ggplot2 主题、`palette` 为离散型颜色主题、`palette_cont` 为连续型颜色主题、`title` 标题名。
- `extra`（附加参数）：所有非通用参数均在此字段设置。

`textarea`、`data`、`dataArg` 以及 `extra` 字段需要配合 UI JSON 格式文件才可以发挥作用。更复杂的 Data JSON 格式文件如以下所示。

### 热图

```json
{
  "module": "basic",
  "tool": "heatmap",
  "params": {
    "textarea": {
      "1-countData": "",
      "2-sampleInfo": "",
      "3-geneInfo": ""
    },
    "config": {
      "data": {
        "1-countData": {
          "value": "",
          "link": ""
        },
        "2-sampleInfo": {
          "value": "",
          "link": ""
        },
        "3-geneInfo": {
          "value": "",
          "link": ""
        }
      },
      "general": {
        "cmd": "",
        "imageExportType": [
          "png",
          "pdf"
        ],
        "size": {
          "width": 8,
          "height": 6
        },
        "title": ""
      },
      "extra": {
        "fontsize_row": 6,
        "fontsize_col": 10,
        "color": "bluered",
        "cluster_rows": true,
        "cluster_cols": true,
        "scale": "none",
        "hc_method": "ward.D2",
        "hc_distance": "euclidean",
        "top_var": 100
      }
    }
  },
  "exampleData": {
    "config": {
      "data": {
        "1-countData": {
          "value": "/public/demo/heatmap/countData.txt",
          "link": ""
        },
        "2-sampleInfo": {
          "value": "/public/demo/heatmap/sampleInfo.txt",
          "link": ""
        },
        "3-geneInfo": {
          "value": "/public/demo/heatmap/geneInfo.txt",
          "link": ""
        }
      },
      "general": {
        "title": "Test Heatmap Plot"
      }
    },
    "textarea": {
      "1-countData": "Gene\tM1\tM2\tM3\tM4\tM5\tM6\tM7\tM8\tM9\tM10\nGBP4\t6.59934410950219\t5.22626602480198\t3.69328753811098\t3.93850095280092\t4.52719308866722\t9.30811903244735\t8.98786485076655\t7.65831236457275\t8.66603797694234\t7.41970810237923\nBCAT1\t5.7603803773696\t4.89278302092092\t5.4489239172689\t3.48541338578293\t3.85566917175335\t8.66208104047003\t8.79331984841678\t8.76591463653863\t8.09720624308158\t8.26294239938877\nCMPK2\t9.56190511541694\t4.54916815653975\t3.99865492244696\t5.61438398058799\t3.90479287264428\t9.79077000447076\t7.13318755148685\t7.37959101963759\t7.93806251518641\t6.15411790257397\nSTOX2\t8.39640931573611\t8.71705522018908\t8.03906411010794\t7.64305955657731\t9.27464909014892\t4.41701300734515\t4.7252697311358\t3.54221687884127\t4.30518704618541\t6.9647100847245\nPADI2\t8.41976589052513\t8.26842980236139\t8.45118084362689\t9.20073228449025\t8.59820720172578\t4.59003301277654\t5.3682684258907\t4.13666741045992\t4.91098611479878\t4.08036305433613\nSCARNA5\t7.65307430977837\t5.78039262971739\t10.6335504726533\t5.91368436291761\t8.80560475012981\t5.89012047654207\t5.52794464354386\t3.82259606723006\t4.04107769290465\t7.9565886355744\nALOX12P2\t9.00142115218082\t7.75354229108506\t4.92095958179653\t7.63635437094677\t9.88862478901644\t6.21194354380297\t3.73201442207366\t3.70085012794602\t5.37403184307771\t7.80489191906552\nSNORA74B\t5.53870871520511\t7.16905339382908\t11.4416464369403\t5.98256568575252\t8.39440252461064\t4.75155925320549\t5.1812949566099\t4.58719537757651\t5.14743989674245\t7.83076780051947\nHIST1H2BL\t6.18127049664725\t4.44841889018637\t5.60496102984375\t6.48516837385035\t2.59957438666689\t7.63017660565678\t6.7582589826989\t10.1375580321457\t9.0466044917583\t7.13264275153722\nMNDA\t8.70263524951799\t7.32235195639172\t9.27182142017149\t9.13451543974325\t8.33911384365565\t4.57190228487297\t5.47837926919321\t3.92483055805651\t4.63957823676203\t4.63950578262665\nOLFM4\t9.3453083049633\t6.4386066367188\t8.71676126406154\t9.68554516855116\t7.68826184326211\t5.9698038656099\t3.85639196824446\t4.47352687053999\t5.64492097261939\t4.20550714642084\nFLT3\t5.16430632091849\t4.41935544328289\t5.06355136332481\t5.41278353561259\t3.33786341844924\t8.5851643929583\t8.87630237134457\t8.9289219977983\t8.98978132515918\t7.24660387214314\nCHD7\t8.37347496380646\t8.7280322425153\t8.40881760839079\t8.71647551270056\t8.37377066730534\t4.6131990181069\t6.63626044076648\t3.68137997972667\t4.19376832161313\t4.29945528605986\nNFIL3\t8.05541647537976\t8.365099881364\t9.23919367693868\t8.53682507747494\t8.45235081884242\t4.4785271277271\t6.50627030863252\t3.8959926983669\t4.41095238359256\t4.08400559267262\nHSPA1B\t5.0081989999114\t9.19465027714563\t6.59884991799149\t7.12950925125609\t3.88526971724655\t5.71217872524064\t11.1338956120625\t6.39810554739138\t6.46058964785579\t4.50338634489\nAP5B1\t8.23682047357699\t8.97263883679405\t8.20421656900127\t8.43242828422906\t9.22400654256986\t4.42420369458669\t4.86304098388495\t4.2488858417092\t3.85484706645842\t5.56354574818102\nIPCEF1\t8.26306719415969\t9.28785556535855\t8.60223284186519\t8.49115577522355\t8.4476994660962\t4.48393585674786\t5.4599674548191\t3.66895649281438\t4.35921951199522\t4.96054388191175\nLRG1\t8.55308333818146\t9.05332170033288\t9.07450940411854\t8.73670030053071\t7.65633324063663\t4.52994448343282\t5.48766232305694\t4.30479407032271\t3.92420851166188\t4.70407666871694\nTHBS4\t8.88103921226797\t8.8962046751857\t7.84480117149793\t8.73936931675074\t8.62706319627278\t4.69931031212911\t5.28322455941077\t3.22068032857857\t4.73731941895932\t5.09562184993861\nRGL4\t8.45480849703071\t8.01938890687672\t8.99083634468092\t9.71863113099265\t7.90807458680074\t4.14705099091832\t4.98508378739981\t4.57671086951137\t4.93034932889645\t4.2936995978838\nMPP7\t8.69051964227409\t8.63034623763923\t7.08087270300907\t9.8384755216119\t8.27182403778882\t5.17919999372186\t5.20086805964123\t3.26699273882508\t5.56522634026712\t4.30030876621311\nUGCG\t8.64836550117938\t8.60055535380447\t9.43104568751548\t7.9230205615877\t8.3092137937507\t4.90251014386811\t5.75080426564036\t4.49285629867141\t4.65998701082659\t3.30627542414731\nCYSTM1\t8.62888362670211\t9.23867708133921\t8.48724305781585\t8.9585373511481\t7.35710866024406\t4.54160477533\t6.37053294888104\t4.24665066524454\t4.74576899180294\t3.44962688248365\nANXA2\t4.98376888645621\t6.74802153101448\t6.22079149043324\t4.71940343214139\t3.28434591086228\t8.08984980446167\t10.637472034078\t7.21491167389481\t9.00271034808197\t5.12335892956738\nENDOD1\t5.55163971872426\t5.4064649993561\t4.66378474612958\t3.55076540459354\t4.10350671158573\t8.39399071433712\t9.538503098682\t9.06992267005361\t8.63966440241984\t7.10639157510974\nARHGAP24\t6.89007947916903\t8.88394109857622\t9.56065081648397\t8.28567368456581\t9.04375155722334\t3.54400997780181\t4.91918263653937\t4.66479366571633\t4.41046835866553\t5.82208276625007\nCST7\t7.88306127465057\t8.54658456777652\t8.36455313109263\t9.54011011955219\t8.69747335007555\t3.55767433775708\t4.45388730772107\t4.20340520858419\t5.06508165045758\t5.71280309332412\nHIST1H2BM\t6.18690843039134\t4.44880329961322\t5.42877081184887\t6.74768148196589\t2.57757949012244\t7.8282327625163\t6.51781948222203\t10.2068683214703\t9.34519021714569\t6.73677974369545\nEREG\t8.59814505842903\t4.92018356125751\t9.22764453024163\t5.22215712669009\t4.68984964026574\t8.70361683592888\t8.65771352926794\t7.82068826440211\t2.94361803349097\t5.24101746101759\nEMP1\t4.83747543388199\t5.99957641741384\t6.11516842490016\t5.05632301458891\t4.8089296544361\t6.71316401442309\t12.1893065350618\t6.31085309821801\t8.39113699139893\t5.60270045666862\nNFAM1\t8.65629018989617\t9.95728900660463\t7.31990029350576\t8.07351398352073\t9.01665766686702\t4.51762315199373\t4.72270958438004\t3.96195071532599\t4.44051975710331\t5.35817969179413\nSLC40A1\t9.52082184984132\t4.6300860675265\t5.11648649001911\t9.34600283255293\t9.81319155476508\t6.10141574721022\t4.18618228730233\t4.19863910040465\t7.19310786258295\t5.91870024878643\nCD52\t4.23092718292703\t5.93249570901771\t5.01189781226921\t5.10130839611687\t4.3983270843923\t6.3800935538825\t8.98466272397821\t10.2347180028922\t9.80030456111072\t5.94989901440479\nHIST1H2BH\t5.80517708727457\t4.34319698777715\t6.13937959034036\t5.81753025438555\t2.51328424691345\t8.18845818393027\t7.12653567067081\t10.4042857366929\t8.87345797255015\t6.81332831045628\nPFKFB3\t7.42425672770331\t9.67678486447417\t8.93515559526994\t8.04583294946198\t8.89068984047688\t4.27386393159326\t6.23845022648375\t4.09911077395125\t4.18928357412355\t4.2512055574534\nSNORD116-20\t8.37705794265498\t5.35955283281031\t8.69484128728057\t8.044566874355\t2.953568193207\t7.26841856308343\t6.68202099844039\t8.31805239073958\t7.83018011936655\t2.4963748390537\nSTX11\t8.33848786950036\t8.56595435724288\t8.76786820829843\t9.40325703236495\t7.8927019041759\t4.20583487558089\t6.56566629172552\t3.93102359732804\t5.05044318547588\t3.30339671929864\nSYNE2\t9.11072611328461\t9.67836134625684\t8.40561173679154\t6.94624220725133\t8.15607283894003\t5.79100701147425\t6.83726740779878\t3.72229368939695\t3.64064574323032\t3.73640594656685\nTCN1\t8.19317939308718\t8.90728488343263\t8.71384756012029\t8.98092755959508\t7.62755788426105\t4.62660939758871\t7.35405470412209\t3.26529168007395\t5.10839832356915\t3.24748265514137\nSNORA74A\t5.4989036434177\t5.06210341418121\t12.5614991243383\t5.83920176184402\t7.58105067734548\t5.49829568381575\t5.02357896739217\t5.50173428262313\t5.4573021976407\t8.00096428839304\nCD74\t5.01744308932942\t5.38397759336954\t3.40565075861287\t3.26432655177697\t5.60296552976606\t8.55015684287963\t8.4645233512142\t8.13241016875959\t8.5163423184491\t9.68683783683414\nEIF4E3\t9.36688761928368\t8.36018887001937\t5.65505213371847\t4.28772104579371\t8.71376536348066\t8.88080109689556\t6.41739276540472\t3.40585799587955\t3.25180217037193\t7.68516498014385\nMYO7B\t8.79611534432829\t9.26583690983665\t7.8656404761721\t8.78531999135262\t9.20970307578869\t4.27220206662578\t4.86618816582842\t4.31029972560557\t3.75857526199639\t4.89475302345698\nMX1\t10.7399030893231\t4.50404260897076\t4.71430259549509\t6.24479780351586\t4.89150097148067\t10.7278791187166\t5.65352833761679\t5.43046577412365\t7.73404493141918\t5.38416881032981\nLDLR\t3.3023953681893\t10.5824300145645\t6.20991327444613\t3.80421415609279\t4.63139094647011\t5.53404635380304\t9.43371508056491\t7.63273933233868\t7.48857857686732\t7.40521093765471\nS100P\t8.35636294936595\t7.91549084154158\t9.48176980003573\t9.64299277807315\t8.36351939921641\t3.69945055381311\t5.68894296460362\t4.35319019179119\t4.53125428970718\t3.99166027284357\nPTPRCAP\t5.02866699715586\t4.72401054711007\t4.12222935711548\t4.18894761345505\t3.80305085836535\t8.52515867110778\t9.16970132164356\t8.84671238588808\t9.08012596508563\t8.53603032406465\nKIT\t5.88821169660724\t2.53319368811524\t5.07711091817713\t4.744692934599\t4.83905051253733\t9.085158267425\t6.46904009029344\t8.93318564462529\t9.05670746922666\t9.39828281938518\nOLR1\t9.01868187619349\t7.93695732170955\t9.39089698487919\t8.89799447847056\t8.66892458672748\t5.26159497530433\t5.04252044319123\t3.57871573392495\t4.84845427537843\t3.3798933652123\nNKG7\t7.31252298211301\t10.372963701899\t7.93774381957631\t8.16124853471517\t9.67105074612135\t4.16407599495347\t4.99276125377779\t4.20468881354564\t3.82412866616305\t5.3834495281267\n",
      "2-sampleInfo": "Sample\tGroup\tAge\nM1\tControl\t23\nM2\tControl\t34\nM3\tControl\t25\nM4\tControl\t52\nM5\tControl\t36\nM6\tCancer\t28\nM7\tCancer\t31\nM8\tCancer\t22\nM9\tCancer\t29\nM10\tCancer\t34",
      "3-geneInfo": "Gene\tPathway\nGBP4\tCancer\nBCAT1\tCancer\nCMPK2\tCancer\nSTOX2\tCancer\nPADI2\tCancer\nSCARNA5\tCancer\nALOX12P2\tCancer\nSNORA74B\tCancer\nHIST1H2BL\tCancer\nMNDA\tCancer\nOLFM4\tCancer\nFLT3\tCancer\nCHD7\tCancer\nNFIL3\tCancer\nHSPA1B\tCancer\nAP5B1\tCancer\nIPCEF1\tCancer\nLRG1\tCancer\nTHBS4\tCancer\nRGL4\tCancer\nMPP7\tCancer\nUGCG\tMetabolism\nCYSTM1\tMetabolism\nANXA2\tMetabolism\nENDOD1\tMetabolism\nARHGAP24\tMetabolism\nCST7\tMetabolism\nHIST1H2BM\tMetabolism\nEREG\tMetabolism\nEMP1\tMetabolism\nNFAM1\tMetabolism\nSLC40A1\tMetabolism\nCD52\tMetabolism\nHIST1H2BH\tMetabolism\nPFKFB3\tMetabolism\nSNORD116-20\tMetabolism\nSTX11\tMetabolism\nSYNE2\tMetabolism\nTCN1\tMetabolism\nSNORA74A\tMetabolism\nCD74\tMetabolism\nEIF4E3\tMetabolism\nMYO7B\tMetabolism\nMX1\tMetabolism\nLDLR\tMetabolism\nS100P\tMetabolism\nPTPRCAP\tMetabolism\nKIT\tMetabolism\nOLR1\tMetabolism\nNKG7\tMetabolism"
    }
  }
}
```

### 火山图

```json
{
  "module": "basic",
  "tool": "volcano",
  "params": {
    "textarea": {
      "datTable": ""
    },
    "config": {
      "dataArg": {
        "datTable": [
          {
            "value": ""
          },
          {
            "value": ""
          },
          {
            "value": ""
          }
        ]
      },
      "general": {
        "cmd": "",
        "imageExportType": [
          "png",
          "pdf"
        ],
        "size": {
          "width": 4.5,
          "height": 3
        },
        "theme": "theme_bw",
        "palette": "lancet",
        "title": "",
        "alpha": 0.5
      },
      "extra": {
        "p_cutoff": 0.05,
        "fc_cutoff": 2,
        "show_top": true,
        "show_genes_num": 10,
        "selected_genes": []
      }
    }
  },
  "exampleData": {
    "config": {
      "dataArg": {
        "datTable": [
          {
            "value": "Symbol"
          },
          {
            "value": "P.Value"
          },
          {
            "value": "logFC"
          }
        ]
      },
      "general": {
        "title": "Test Volcano Plot"
      }
    },
    "textarea": {
      "datTable": "Symbol\tlogFC\tP.Value\nLTB\t2.580830574\t1.17E-14\nCDCA5\t-2.326302376\t2.46E-13\nC10orf54\t3.307901298\t3.53E-13\nCAPN7\t2.514235402\t1.04E-12\nOIP5\t-2.16662036\t1.43E-12\nSNORD116-2\t3.139661776\t2.15E-12\nPKIG\t-1.560503944\t1.58E-12\nEMCN\t3.681695861\t2.68E-12\nB2M\t1.578095238\t2.82E-12\nIL6ST\t2.287862908\t5.51E-12\nSNORD90\t4.285534102\t6.12E-12\nDUSP6\t3.01388868\t7.90E-12\nRBMS1\t2.251183421\t8.82E-12\nC4orf18\t4.252879583\t1.17E-11\nSKAP1\t3.112284552\t1.80E-11\nCD48\t1.8697202\t1.89E-11\nF11R\t2.647752591\t1.99E-11\nZNF83\t2.854695072\t2.93E-11\nKIAA0664\t-1.565376538\t3.34E-11\nSETBP1\t2.23996263\t3.90E-11\nTNFSF10\t3.044122513\t3.87E-11\nSMOX\t2.191591775\t4.85E-11\nFAIM3\t3.789600438\t4.90E-11\nNLRP1\t1.637345982\t6.18E-11\nSNORD11B\t2.731552213\t5.99E-11\nSHCBP1\t-1.764536246\t7.34E-11\nTUBA4A\t2.699864676\t7.56E-11\nSNORD45A\t3.17650067\t9.76E-11\nGAS2\t1.794776006\t1.05E-10\nDENND4C\t2.532413268\t1.16E-10\nCENTD1\t3.840179499\t1.23E-10\nSTX16\t1.753540316\t1.41E-10\nGLTP\t2.466056912\t1.41E-10\nSUCLG2\t2.928543297\t1.57E-10\nNCAPD3\t-1.781520666\t1.67E-10\nFBXO30\t2.632198292\t1.78E-10\nMCTP1\t2.494353116\t1.96E-10\nTMEM106B\t2.641348607\t2.18E-10\nANXA4\t2.589776199\t2.26E-10\nBRI3\t2.32304862\t2.65E-10\nSCMH1\t2.534410245\t2.81E-10\nEFNA1\t2.061209663\t3.17E-10\nLOC100216545\t2.563903745\t3.23E-10\nTFPI\t2.768874139\t3.47E-10\nDOCK10\t1.574819826\t3.58E-10\nPLEC1\t2.046811325\t4.21E-10\nNBPF14\t1.631133914\t4.26E-10\nGNAI1\t3.292962351\t4.50E-10\nDNAJB14\t1.762813394\t4.64E-10\nSPIN1\t1.89821937\t4.90E-10\nC3orf65\t2.486153394\t5.10E-10\nSNORA40\t3.032186515\t5.13E-10\nJAK3\t1.673176313\t5.36E-10\nDAPP1\t2.773503453\t5.53E-10\nCIDECP\t1.673952095\t5.52E-10\nBAT1\t1.659285974\t6.52E-10\nCD302\t3.143917019\t6.41E-10\nHIST2H2BF\t2.107694721\t7.38E-10\nTSC22D3\t1.348915568\t7.35E-10\nJMY\t2.973822067\t7.99E-10\nWDR4\t-1.310110292\t8.66E-10\nWFS1\t3.231184469\t9.04E-10\nPPP1R15B\t2.941824385\t9.31E-10\nTNFRSF10D\t2.420104255\t9.79E-10\nSNORD101\t3.125526526\t9.89E-10\nWBP5\t2.732004269\t9.91E-10\nCCBL2\t3.112615008\t1.01E-09\nPDCD2L\t-2.113055026\t1.04E-09\nSLK\t2.884328183\t1.04E-09\nCAPN2\t2.124368974\t1.13E-09\nC1orf27\t2.935836151\t1.25E-09\nLOC54103\t2.739359464\t1.42E-09\nGIMAP8\t2.956962963\t1.43E-09\nDYNLT3\t2.723945192\t1.50E-09\nCD320\t-0.974251062\t1.58E-09\nC7orf43\t1.810778464\t1.65E-09\nTMEM38B\t3.008491233\t1.64E-09\nSNRK\t1.865929972\t1.86E-09\nSNRK\t1.891882225\t1.89E-09\nPHYH\t2.121411408\t1.99E-09\nSNX10\t3.18236194\t2.00E-09\nPPP2CB\t3.317414573\t2.22E-09\nEID3\t2.498561617\t2.23E-09\nLOC153561\t1.669940216\t2.34E-09\nVEZT\t3.154359576\t2.31E-09\nPREX2\t2.624955415\t2.32E-09\nCD74\t2.264093985\t2.33E-09\nHIST2H2BE\t2.822447195\t2.50E-09\nSEL1L3\t1.452464322\t2.53E-09\nNAP1L1\t2.525931404\t2.73E-09\nPTTG3P\t-1.2886861\t2.74E-09\nGNA13\t2.984842773\t2.79E-09\nALDH1A1\t2.805007303\t2.82E-09\nRFWD2\t1.320951986\t2.98E-09\nRNF149\t2.001710859\t2.99E-09\nMN1\t1.650245511\t3.06E-09\nUBE2T\t-2.642575162\t3.08E-09\nGBP2\t1.849700828\t3.30E-09\nUHRF1\t-1.498478196\t3.32E-09\nDDX17\t1.355291128\t3.43E-09\nDVL2\t1.567126145\t3.45E-09\nC8orf33\t1.61634479\t3.52E-09\nKCTD6\t2.741615683\t3.54E-09\nREL\t2.616629244\t3.76E-09\nPLEKHA5\t2.157890626\t3.75E-09\nPDXDC2\t2.412685822\t3.84E-09\nCYP51A1\t2.269862597\t3.94E-09\nC6orf204\t2.650498256\t3.94E-09\nPPM1D\t1.838008448\t4.02E-09\nC1orf52\t2.209529981\t4.12E-09\nPFDN5\t1.184332\t4.11E-09\nSNORD15A\t3.106151098\t4.47E-09\nC11orf71\t2.213827794\t4.45E-09\nSLC5A10\t3.32741743\t4.73E-09\nSNORD58A\t2.633392176\t4.73E-09\nKIF16B\t2.899153367\t4.83E-09\nC20orf106\t2.45895529\t4.85E-09\nFBXO11\t2.968344081\t5.21E-09\nG3BP2\t2.438734867\t5.23E-09\nTUBB4Q\t1.755223987\t5.41E-09\nAES\t2.650892668\t5.43E-09\nPYGL\t1.530968225\t5.55E-09\nSNORD57\t2.174552314\t5.56E-09\nNR4A2\t2.615482307\t5.76E-09\nCENPH\t-2.19106195\t5.81E-09\nBMP6\t2.636175343\t6.09E-09\nECE2\t-3.098961372\t6.32E-09\nSLC30A3\t2.392841012\t6.71E-09\nMYCT1\t2.728250017\t6.73E-09\nDUSP11\t1.874551148\t7.50E-09\nHLA-C\t3.623823362\t7.50E-09\nPTGS2\t3.325491831\t7.72E-09\nNPIP\t1.2141338\t7.94E-09\nNMD3\t2.556687502\t8.20E-09\nNHLRC3\t2.188286202\t8.41E-09\nTP53INP1\t1.694127564\t8.74E-09\nHLA-DMB\t0.918279148\t9.00E-09\n43166\t2.927183144\t9.26E-09\nEFHC2\t1.989834569\t9.32E-09\nHECA\t2.57491547\t9.71E-09\nACSF2\t2.784113269\t9.73E-09\nITGAX\t2.380372559\t1.00E-08\nSNORD109A\t2.568549382\t1.01E-08\nCDCA4\t-2.582205642\t1.03E-08\nSeptin 2\t2.42105794\t1.04E-08\nGABBR1\t2.564331292\t1.07E-08\nTAPBP\t1.704721108\t1.08E-08\nKPNA6\t1.129223094\t1.14E-08\nATP5G1\t-1.244276948\t1.15E-08\nLOC728855\t2.939539196\t1.19E-08\nZNF655\t2.146976359\t1.19E-08\nGIMAP2\t2.616881069\t1.26E-08\nSNORD54\t3.049868661\t1.27E-08\nWDR33\t1.948287195\t1.34E-08\nPREX2\t3.285895384\t1.35E-08\nSCFD1\t2.600587841\t1.40E-08\nCRYM\t-3.238068573\t1.41E-08\nNDUFA12\t-0.848197348\t1.45E-08\nADIPOR1\t2.851473731\t1.48E-08\nRAPGEF3\t2.693761519\t1.58E-08\nASGR1\t2.290184317\t1.60E-08\nAMMECR1L\t1.711783887\t1.75E-08\nARHGAP27\t1.770732045\t1.76E-08\nATG16L1\t-1.568648562\t1.78E-08\nARGLU1\t1.682967662\t1.79E-08\nTTC14\t2.681213309\t1.81E-08\nPIK3C2A\t2.600816364\t1.81E-08\nFAM108B1\t2.166117703\t1.89E-08\nETS1\t2.777475458\t1.89E-08\nLIN7C\t2.069317387\t1.95E-08\nMAN1A1\t2.467221656\t1.97E-08\nTMEM70\t1.459796049\t2.01E-08\nSCARNA1\t2.665515293\t2.01E-08\n7A5\t2.376298384\t2.07E-08\nSNORA53\t2.401449051\t2.09E-08\nSNORA11\t2.322649296\t2.14E-08\nKIAA1191\t1.915860872\t2.15E-08\nKCNK5\t-2.518390469\t2.30E-08\nRPS21\t-1.170227058\t2.32E-08\nTERF1\t1.638389068\t2.37E-08\nWSB1\t1.069996842\t2.37E-08\nGATAD1\t1.679118217\t2.43E-08\nNR4A3\t2.137548814\t2.45E-08\nGOLGA6\t1.763912508\t2.51E-08\nERG\t2.972707379\t2.52E-08\nMALT1\t2.26037905\t2.55E-08\nHERPUD2\t1.900667585\t2.56E-08\nLCOR\t2.863017349\t2.68E-08\nARL4A\t2.534282385\t2.68E-08\nIQCA1\t1.799161113\t2.76E-08\nTM2D1\t2.591118647\t2.78E-08\nUCK2\t-1.089567526\t2.88E-08\nSMURF1\t2.213575609\t2.92E-08\nSP1\t2.296459764\t2.99E-08\nTADA1L\t1.926722058\t3.01E-08\nSNORD60\t2.401728236\t3.10E-08\nP2RY5\t2.204663192\t3.13E-08\nRRP1B\t2.085705853\t3.24E-08\nNR4A2\t3.358040068\t3.24E-08\nC12orf31\t2.434593945\t3.38E-08\nTMED7\t2.64503761\t3.41E-08\nPNRC2\t1.969004393\t3.44E-08\nFAM164A\t1.843772505\t3.51E-08\nGART\t-1.351433354\t3.61E-08\nUBR7\t-1.435194528\t3.62E-08\nSTARD4\t2.224089317\t3.83E-08\nKIAA0101\t-2.920414589\t3.84E-08\nPLAGL1\t1.853212055\t3.97E-08\nIGLL1\t-2.297869085\t4.02E-08\nSPAG9\t2.233964196\t4.11E-08\nACE\t1.496120153\t4.14E-08\nPTPN22\t2.444700116\t4.28E-08\nCLK1\t2.526763799\t4.33E-08\nNOP14\t2.261392002\t4.40E-08\nALDH6A1\t1.762876928\t4.42E-08\nFAM98A\t1.571431616\t4.50E-08\nADD3\t2.584354917\t4.51E-08\nC1orf85\t1.451055504\t4.66E-08\nPEAR1\t2.32583453\t4.69E-08\nCRLF3\t2.143178781\t4.79E-08\nAGL\t2.390643324\t4.85E-08\nC2orf32\t-4.393018768\t4.97E-08\nTSC22D2\t2.893539092\t4.99E-08\nKIAA1143\t2.386606962\t5.20E-08\nFAM120AOS\t1.833994649\t5.23E-08\nARL4A\t2.628451682\t5.52E-08\nEHD2\t2.507711389\t5.51E-08\nTCEAL3\t2.592378097\t5.64E-08\nACBD3\t2.202158272\t5.74E-08\nSLC25A19\t-1.786317456\t5.84E-08\nLRP1\t2.439869094\t5.85E-08\nMARCKS\t1.57127199\t5.95E-08\nFUT11\t2.140072864\t6.04E-08\nFBXO3\t1.699236697\t6.06E-08\nZNF644\t2.21248374\t6.12E-08\nWBP2\t1.07050078\t6.29E-08\nKIF27\t2.673535202\t6.32E-08\nPKMYT1\t-4.42290933\t6.46E-08\nAMD1\t2.599648671\t6.48E-08\nRNF103\t2.327445671\t6.60E-08\nSKP1\t2.011967001\t6.59E-08\nGRK5\t1.804758477\t6.79E-08\nRPS23\t1.484142372\t6.83E-08\nMETTL9\t1.859259752\t6.94E-08\nHOXA2\t2.126448566\t6.93E-08\nDCBLD2\t3.336851659\t7.09E-08\nMTFMT\t1.998551051\t7.13E-08\nCENPN\t-0.861824614\t7.21E-08\nST13\t1.231982764\t7.21E-08\nLOC440354\t1.628840962\t7.26E-08\nIFNAR2\t1.890839122\t7.36E-08\nSNORA21\t1.87845627\t7.63E-08\nCARD16\t2.811988831\t7.71E-08\nCXorf21\t2.526566943\t7.81E-08\nKIAA0240\t1.660318907\t7.88E-08\nAIF1\t1.649946816\t7.98E-08\nOAS3\t1.407428078\t8.00E-08\nRNF13\t1.878881286\t8.10E-08\nZNF514\t1.605437562\t8.17E-08\nTCEAL1\t2.366326534\t8.37E-08\nHOXA9\t2.269711736\t8.43E-08\nSPON2\t-1.990975545\t8.59E-08\nSELK\t2.416620159\t8.59E-08\nTHUMPD1\t1.91383205\t8.85E-08\nSDAD1\t1.127485936\t8.87E-08\nDKFZP564O0523\t2.586508268\t8.96E-08\nASXL2\t2.491785167\t8.99E-08\nATP6V1C1\t2.343858942\t9.19E-08\nC1orf43\t2.099332016\t9.24E-08\nCD44\t1.342161754\t9.46E-08\nPTPRE\t1.73773728\t9.50E-08\nSNORD76\t2.570643097\t9.62E-08\nSNORD114-3\t2.591413172\t9.77E-08\nZMAT1\t2.348465353\t9.87E-08\nUBE3C\t1.873475224\t9.87E-08\nC7orf23\t1.55543335\t1.00E-07\nKIAA1600\t2.47904252\t1.00E-07\nIQGAP2\t2.293080363\t1.03E-07\nCOPS8\t2.503755753\t1.03E-07\nSFRS5\t1.971978562\t1.05E-07\nBARD1\t-1.138523468\t1.05E-07\nMKI67IP\t1.846953972\t1.07E-07\nZNF141\t2.064901931\t1.08E-07\nP4HA1\t1.829654049\t1.09E-07\nNCOR2\t1.845832019\t1.10E-07\nCFI\t2.365700077\t1.15E-07\nSEC24B\t1.928552221\t1.15E-07\nPOGZ\t1.506056234\t1.17E-07\nPPIL5\t2.235695033\t1.17E-07\nAHR\t1.432813094\t1.21E-07\nCLEC3B\t2.456871624\t1.23E-07\nDNAJB14\t1.831608383\t1.26E-07\nCCNG1\t2.6483916\t1.26E-07\nGCC1\t2.154361434\t1.28E-07\nFAM91A1\t2.113188908\t1.28E-07\nC10orf84\t-2.455492056\t1.30E-07\nCYSLTR1\t2.724640669\t1.30E-07\nHEMGN\t2.176900188\t1.32E-07\nSRP14\t2.411026421\t1.32E-07\nVPS24\t2.946390908\t1.36E-07\nSOCS2\t1.31095286\t1.36E-07\nSMAD5\t2.169176715\t1.36E-07\nCCNE1\t-1.42558521\t1.37E-07\nTECR\t-1.110361996\t1.39E-07\nPSMA2\t2.705394625\t1.40E-07\nUSP16\t1.976526816\t1.45E-07\nSNX16\t2.609985369\t1.45E-07\nC7orf46\t1.73332848\t1.50E-07\nLEF1\t-3.069406149\t1.50E-07\nST3GAL5\t1.513777076\t1.52E-07\nPRKACB\t2.048330831\t1.53E-07\nTSEN15\t2.19346509\t1.54E-07\nVAPA\t1.861531303\t1.55E-07\nALDH5A1\t2.277101162\t1.56E-07\nGSTA4\t2.226007559\t1.56E-07\nCES8\t2.267740546\t1.60E-07\nRABGEF1\t2.203167433\t1.60E-07\nSLC16A3\t2.375538102\t1.62E-07\nNIPBL\t2.744032293\t1.63E-07\nPKN2\t1.942238174\t1.68E-07\nSKA2\t2.023151069\t1.68E-07\nSNORD11\t2.701904409\t1.71E-07\nKCNK17\t2.068072071\t1.72E-07\nZNF281\t2.051549636\t1.74E-07\nCEP57\t1.915860604\t1.76E-07\nABT1\t1.720885211\t1.79E-07\nASH1L\t2.415843421\t1.80E-07\nLOC100190986\t1.073391958\t1.82E-07\nCDC16\t2.238114418\t1.85E-07\nFBXW11\t2.214988414\t1.87E-07\nC6orf173\t-0.943950518\t1.88E-07\nPRKACB\t2.61301041\t1.89E-07\nSNORA2A\t1.847064421\t1.90E-07\nETV3\t1.519548507\t1.93E-07\nCDC14A\t2.415482757\t1.93E-07\nHNRPK\t2.341759444\t1.95E-07\nGPD2\t1.778375115\t1.96E-07\nMST4\t2.104496278\t1.99E-07\nDDX59\t2.162610575\t2.01E-07\nNBEA\t2.249510396\t2.03E-07\nRORA\t2.77182728\t2.03E-07\nSTEAP3\t-2.372817165\t2.06E-07\nMTMR2\t2.295993977\t2.06E-07\nMGC21881\t1.375595708\t2.09E-07\nSEC62\t1.756600314\t2.10E-07\nZMYM5\t1.715306173\t2.14E-07\nHIST1H2BD\t2.909347531\t2.15E-07\nPPM2C\t1.996730593\t2.21E-07\nPLEKHA1\t1.769819129\t2.23E-07\nRNF19B\t1.844216651\t2.27E-07\nTBC1D9B\t1.97326931\t2.27E-07\nOFD1\t1.81652763\t2.28E-07\nPPP4R1\t2.039613541\t2.32E-07\nVPS36\t1.42957004\t2.33E-07\nTROVE2\t2.848900373\t2.38E-07\nSPI1\t2.192249768\t2.40E-07\nKCNH2\t-3.827473531\t2.40E-07\nTRAF6\t2.150451786\t2.48E-07\nSEC24A\t1.717888212\t2.52E-07\nTIAF1\t2.39618237\t2.59E-07\nTINP1\t2.051366765\t2.60E-07\nTNFRSF10B\t1.428222834\t2.63E-07\nUBE2N\t2.703990892\t2.63E-07\nITPKA\t-1.958926857\t2.64E-07\nMTPN\t2.326510264\t2.65E-07\nCDC37L1\t2.374142546\t2.70E-07\nIDI1\t2.213495663\t2.73E-07\nRNF8\t2.227849247\t2.83E-07\nHNRPH1\t2.246772599\t2.83E-07\nBFAR\t1.877853113\t2.85E-07\nNCK2\t1.776392793\t2.87E-07\nLRRC8C\t2.691372552\t2.92E-07\nARL4A\t2.479737733\t2.94E-07\nCD79B\t0.949290638\t2.98E-07\nSKA2\t1.320172448\t2.99E-07\nSNORD33\t1.011008212\t3.02E-07\nFAM119A\t2.1674084\t3.02E-07\nUSP44\t2.652099182\t3.05E-07\nZNF233\t2.364625244\t3.06E-07\nSNORD4A\t1.550448639\t3.11E-07\nRRAS2\t1.963799455\t3.12E-07\nIFNGR2\t0.783760138\t3.13E-07\nZNF321\t2.330586449\t3.14E-07\nKIAA0090\t1.66416609\t3.17E-07\nSNORA14A\t2.241641744\t3.19E-07\nHTATIP2\t2.166712034\t3.26E-07\nDYNLRB1\t2.092006552\t3.26E-07\nC9orf36\t1.833880107\t3.31E-07\nARID2\t2.340857852\t3.33E-07\nDSE\t2.016522156\t3.37E-07\nZNF322A\t2.551239821\t3.39E-07\nSFRS10\t2.262171784\t3.42E-07\nCALM1\t2.240151135\t3.43E-07\nPHLDB1\t2.35772501\t3.45E-07\nZNF189\t2.309132877\t3.46E-07\nNLRX1\t1.54439703\t3.57E-07\nFAM107B\t1.750561694\t3.57E-07\nMYST4\t2.319392767\t3.64E-07\nSPOP\t1.705052805\t3.64E-07\nCGRRF1\t1.551013591\t3.69E-07\nC2orf49\t2.350654597\t3.69E-07\nPPP2CA\t2.480923474\t3.70E-07\nSFRS11\t2.554549316\t3.73E-07\nC17orf63\t1.49330862\t3.77E-07\nPGRMC2\t2.304943821\t3.77E-07\nTUBG1\t-1.54953068\t3.81E-07\nTOPORS\t1.31862355\t3.81E-07\nSPAST\t1.602222208\t3.91E-07\nSNORD77\t1.410571838\t3.92E-07\nING3\t2.235265329\t3.96E-07\nTNFRSF10A\t1.910839237\t3.97E-07\nMYO18A\t1.961139837\t4.06E-07\nTFB2M\t1.574348636\t4.07E-07\nRBBP6\t1.849247439\t4.13E-07\nTP53INP1\t1.63476274\t4.15E-07\nSNORD95\t1.362838182\t4.16E-07\nKIAA1267\t0.69770044\t4.20E-07\nFRMPD2\t-4.26738285\t4.27E-07\nSNX7\t1.904087625\t4.27E-07\nC1D\t2.365042737\t4.42E-07\nSNORD30\t1.054145772\t4.43E-07\nSP110\t1.290589624\t4.47E-07\nNUMB\t2.022085553\t4.47E-07\nGNAI3\t1.935612448\t4.52E-07\nCD83\t1.879895841\t4.53E-07\nPHKB\t-1.338589404\t4.61E-07\nAGTPBP1\t1.726221136\t4.63E-07\nDYRK3\t2.38217318\t4.65E-07\nMRPL47\t2.052328952\t4.71E-07\nCOQ10B\t1.49671389\t4.81E-07\nTCEAL1\t2.313689413\t4.82E-07\nCSTF2T\t2.656762233\t4.93E-07\nTSPYL2\t2.012978847\t4.94E-07"
    }
  }
}
```

## UI JSON 格式说明

UI JSON 文件主要用于自动渲染 Vue.js 应用前端。主要包括以下三个字段：

- `data`
- `dataArg`
- `extra`

通用参数可以自动根据字段有无进行配置，所以无需在 UI JSON 中进行配置，最简示例格式如下（仅需配置一个数据表）：

```json
{
  "data": {
    "datTable": {
      "type": "hiplot-textarea",
      "required": true,
      "label": {
        "zh_cn": "数据表",
        "en": "Data Table"
      },
    }
  }
}
```


`data` 字段支持的类型：

- `hiplot-textarea` 表格
- `cloud-file` 文件选择
- `combobox` 文本输入选择（可不在给定选项中）
- `codemirror` 代码输入框

`extra` 字段支持的类型：

- `slider`: 数字滑块
- `switch`: 是否切换
- `select`: 选择框
- `autocomplete` 可以检索的选择框
- `color-picker`：颜色选择
- `text-field`: 文本输入

以上字段和类型均可以继续扩展，参考：https://vuetifyjs.com/en/components/autocompletes/。

`items_func` 可以通过执行 JavaScript 函数去设置选择框可选参数，其中 `this.select_cols` 函数可以用于根据前端数据表获取某列的所有值作为可选择项（第一个参数为数据表字段名、第二个参数指定列，从 0 开始计数）。

`if` 可以设置动态显示某些 UI 组件，它的值需为 `extra` 字段中的某个值。

`if_func` 可以通过执行 JavaScript 函数去设置 UI 是否显示。通过 `this.params` 可以获取 Data JSON 中对应的值。 

`class` 可以设置组件的类，其中 `col`、`col-xs`、`col-md`、`col-lg`、`col-xl` + 数字（1-12）可以响应式的控制元素宽度，详细尺寸参考：https://vuetifyjs.com/en/features/breakpoints/#usage。

### 热图

```json
{
  "data": {
    "1-countData": {
      "type": "hiplot-textarea",
      "required": true,
      "label": "messages.basic.heatmap.countData"
    },
    "2-sampleInfo": {
      "type": "hiplot-textarea",
      "required": false,
      "label": {
        "en": "SampleInfo",
        "zh_cn": "样本信息"
      }
    },
    "3-geneInfo": {
      "type": "hiplot-textarea",
      "required": false,
      "label": {
        "en": "GeneInfo",
        "zh_cn": "基因信息"
      }
    }
  },
  "extra": {
    "color": {
      "type": "select",
      "label": "messages.basic.heatmap.color",
      "items": [
        "bluered",
        "greenred",
        "heat",
        "methylation"
      ],
      "class": "col-12 col-md-6"
    },
    "scale": {
      "type": "select",
      "label": "messages.basic.common.scale",
      "items": [
        "none",
        "row",
        "column"
      ],
      "class": "col-12 col-md-6"
    },
    "hc_method": {
      "type": "select",
      "label": "messages.basic.common.hc_method",
      "items": [
        "ward.D",
        "ward.D2",
        "single",
        "complete",
        "average",
        "mcquitty",
        "median",
        "centroid"
      ],
      "class": "col-12 col-md-6"
    },
    "hc_distance": {
      "type": "select",
      "label": "messages.basic.common.hc_distance",
      "items": [
        "euclidean",
        "maximum",
        "manhattan",
        "canberra",
        "binary",
        "minkowski"
      ],
      "class": "col-12 col-md-6"
    },
    "fontsize_row": {
      "type": "slider",
      "label": "messages.basic.common.fontsizeRow",
      "class": "col-12 col-md-6"
    },
    "fontsize_col": {
      "type": "slider",
      "label": "messages.basic.common.fontsizeCol",
      "class": "col-12 col-md-6"
    },
    "cluster_rows": {
      "type": "switch",
      "label": "messages.basic.common.cluster_rows",
      "class": "col-12 col-md-4"
    },
    "cluster_cols": {
      "type": "switch",
      "label": "messages.basic.common.cluster_cols",
      "class": "col-12 col-md-4"
    },
    "top_var": {
      "type": "slider",
      "label": {
        "zh_cn": "Top 方差",
        "en": "Top Variance"
      },
      "min": 1,
      "class": "col-12"
    }
  }
}
```

### 火山图

```json
{
  "data": {
    "datTable": {
      "type": "hiplot-textarea",
      "required": true,
      "label": "messages.extra.dataTable"
    }
  },
  "dataArg": {
    "datTable": [
      {
        "label": "Symbol"
      },
      {
        "label": "P.Value"
      },
      {
        "label": "logFC"
      }
    ]
  },
  "extra": {
    "p_cutoff": {
      "type": "slider",
      "label": "messages.basic.volcano.pCutoff",
      "min": 0,
      "max": 1,
      "step": 0.001,
      "class": "col-12 col-md-6"
    },
    "fc_cutoff": {
      "type": "slider",
      "label": "messages.basic.volcano.fcCutoff",
      "step": 0.1,
      "class": "col-12 col-md-6"
    },
    "show_top": {
      "type": "switch",
      "label": "messages.basic.volcano.showTop",
      "class": "col-12"
    },
    "show_genes_num": {
      "type": "slider",
      "label": "messages.basic.volcano.show_genes_num",
      "class": "col-12 col-md-6",
      "if": "show_top",
      "max": 500
    },
    "selected_genes": {
      "type": "autocomplete",
      "multiple": true,
      "label": "messages.basic.volcano.selected_genes",
      "class": "col-12 col-md-6",
      "if": "show_top",
      "items_func": "this.select_cols('datTable', 0)"
    }
  }
}
```

### 气泡图

```json
{
  "data": {
    "datTable": {
      "type": "hiplot-textarea",
      "required": true,
      "label": "messages.common.dataTable"
    }
  },
  "dataArg": {
    "datTable": [
      {
        "label": "Term"
      },
      {
        "label": "Count"
      },
      {
        "label": "Ratio"
      },
      {
        "label": "P.value"
      }
    ]
  },
  "extra": {
    "topnum": {
      "type": "slider",
      "label": "messages.basic.bubble.topnum",
      "max": 300,
      "class": "col-12 col-md-6"
    },
    "pq_value": {
      "type": "select",
      "label": "messages.basic.bubble.pq_value",
      "class": "col-12 col-md-6",
      "items": ["Q Value", "P Value", "FDR"]
    },
    "low_color": {
      "type": "color-picker",
      "label": "messages.basic.common.low_color",
      "class": "col-12 col-md-4"
    },
    "high_color": {
      "type": "color-picker",
      "label": "messages.basic.common.high_color",
      "class": "col-12 col-md-4"
    }
  }
}
```

### GISTIC2

```json
{
  "data": {
    "input": {
      "type": "cloud-file",
      "required": true,
      "label": {
        "zh_cn": "Segmentation 文件",
        "en": "Segmentation File"
      },
      "icon": "mdi-file",
      "exts": [
        "txt"
      ],
      "enable-download": true,
      "enable-preview": true,
      "enable-upload": true
    }
  },
  "extra": {
    "refgenefile": {
      "type": "select",
      "label": {
        "en": "Reference Genome Version",
        "zh_cn": "参考基因版本"
      },
      "items": [
        "hg16.mat",
        "hg17.mat",
        "hg18.mat",
        "hg19.mat",
        "hg19.UCSC.add_miR.140312.refgene.mat",
        "hg38.UCSC.add_miR.160920.refgene.mat"
      ],
      "class": "col-12"
    },
    "brlen": {
      "type": "slider",
      "label": {
        "en": "Threshold (broad form focal events)",
        "zh_cn": "阈值 (broad form focal events)"
      },
      "min": 0,
      "max": 1,
      "step": 0.01,
      "class": "col-12"
    },
    "maxseg": {
      "type": "slider",
      "label": {
        "en": "Maximum number of segments (K)",
        "zh_cn": "片段最大值 (K)"
      },
      "min": 0,
      "max": 100,
      "step": 0.01,
      "class": "col-12"
    },
    "confidence": {
      "type": "slider",
      "label": {
        "en": "Confidence Level of Region Driver",
        "zh_cn": "区间驱动置信水平"
      },
      "min": 0,
      "max": 1,
      "step": 0.01,
      "class": "col-12"
    },
    "rx": {
      "type": "switch",
      "label": {
        "en": "Remove X-chromosome",
        "zh_cn": "移除 X 染色体"
      },
      "class": "col-12 col-md-4"
    },
    "genegistic": {
      "type": "switch",
      "label": {
        "en": "Deletions Sig at Gene level",
        "zh_cn": "基因水平计算缺失显著性"
      },
      "class": "col-12 col-md-4"
    },
    "broad": {
      "type": "switch",
      "label": {
        "en": "Broad-level Analysis",
        "zh_cn": "Broad 水平分析"
      },
      "class": "col-12 col-md-4"
    },
    "armpeel": {
      "type": "switch",
      "label": {
        "en": "Arm-level Peel Off",
        "zh_cn": "臂水平剥离"
      },
      "class": "col-12 col-md-4"
    }
  }
}
```

### tinyscholar

```json
{
  "data": {
    "id": {
      "type": "combobox",
      "required": true,
      "label": "Google Scholar ID",
      "prepend-icon": "mdi-diamond-stone"
    }
  }
}
```

### r-code-flow

```json
{
  "data": {
    "code": {
      "type": "codemirror",
      "required": true,
      "label": "messages.common.code"
    }
  }
}
```

## 后台任务代码说明

Hiplot 的后台绘图脚本默认使用 R 完成。其代码主要分为数据处理和配置、绘图、导出三个区块。Hiplot 已默认完成数据导入：

- data
- data2
- data3
- ......

一些通用函数：

- `return_hiplot_palette_color` 和 `return_hiplot_palette` 返回 ggplot2 绘图颜色主题
- `choose_ggplot_theme` 设置 ggplot2 主题
- `export_single` 导出图片

`conf` 变量为 Data JSON 中 `config` 字段解析后的结果，可以通过 `conf$extra` 获取其附加参数。

`opt$outputFilePrefix` 为导出的目录+前缀，如`/path/output/s.12323`，则生成的 PDF 文件路径为 `/path/output/s.12323.pdf`。通过 `dirname(opt$outputFilePrefix)` 可以得到结果输出目录。

在该目录内可以生成任意数量的 PNG、PDF、HTML、tif 文件，以及一个 XLSX 表格文件，相关文件的下载路径将被作为结果发送至用户。

对于一些输出结果较多的工具，可以在该目录下新建一个 `output` 目录作为结果输出路径，并将其中额外结果打包至一个 gzip 文件中供用户下载，如 `/path/s.12323.tar.gz`。

```r
# 面积图
############# Section 1 ##########################
# input options, data and configuration section
##################################################
{
  # rename colnames
  usr_xlab <- colnames(data)[2]
  usr_ylab <- colnames(data)[3]
  colnames(data) <- c("Group", "xvalue", "yvalue")
}

############# Section 2 #############
#           plot section
#####################################
{
  p <- ggplot(data, aes(x = xvalue, y = yvalue, fill = Group)) +
    geom_area(alpha = conf$general$alpha) +
    ylab(usr_ylab) +
    xlab(usr_xlab) +
    ggtitle(conf$general$title)

  ## add ggsci color palette
  p <- p + return_hiplot_palette_color(conf$general$palette,
  conf$general$palette_custom) +
    return_hiplot_palette(conf$general$palette,
  conf$general$palette_custom)

  theme <- conf$general$theme
  p <- choose_ggplot_theme(p, theme)
}

############# Section 3 #############
#          output section
#####################################
{
  export_single(p, opt, conf)
}
```

如果是其他命令行脚本（Python/Bash 等），可以通过以下模板完成执行 (通过 `conf` 可以获取输入参数)，其中 `conf$data` 可包含任意个输入的文件，通过 `parse_file_link(conf$data$[your_file_id]$link)` 函数即可获取对应的输入文件路径:

```r
############# Section 1 ##########################
# input options, data and configuration section
##################################################
{
  ## Input should be a segmentation file
  if ("data" %in% names(conf) && "input" %in% names(conf$data) &&
    conf$data$input$link != "") {
    infile <- parse_file_link(conf$data$input$link)
  }
}
############# Section 2 #############
#           plot section
#####################################
{
outdir <- sprintf("%s/output", dirname(opt$outputFilePrefix))
outlog <- sprintf("%s/task.log", dirname(opt$outputFilePrefix))
dir.create(outdir)

cmds <- paste("prog",
  "param1",
  "param2",
  "&>>", outlog)
cat(cmds, sep = "\n")
system(cmds)
}

############# Section 3 #############
#          output section
#####################################
{
  owd <- getwd()
  setwd(outdir)
  system(sprintf(
    "tar -czv * -f %s.addition.tar.gz",
    opt$outputFilePrefix
  ))
  src <- list.files(outdir, ".pdf|.png", full.names = TRUE)
  dest <- dirname(opt$outputFilePrefix)
  file.copy(src, dest)
  setwd(owd)
  unlink(outdir, recursive = TRUE)
}
```
