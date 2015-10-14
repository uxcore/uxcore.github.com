# Steps

- order: 9
- category: CSS
- chinese:　进度条

---

## 进度条

> 各种应用Case中的导航状态或进度条，目前暂分为两种状态和三种状态展现；


### 双状态条(实现&虚线标注形态)

> 通过添加 `.kuma-steps` 来创建状态条基础样式，再通过 `.double-s` 和 `.ds-dash` 来区分双状态条的实现和虚线样式形态。


````html
<div class="kuma-steps">
    <div class="kuma-steps-bd">
        <ul class="fn-clear double-s">
            <li class="ds-col">
                <div class="s-item done">
                    <i class="kuma-icon kuma-icon-number1"></i><strong>步骤1</strong>
                </div>
            </li>
            <li class="ds-col">
                <div class="s-item">
                    <i class="kuma-icon kuma-icon-number2"></i><strong>步骤2</strong>
                </div>
            </li>
            <li class="ds-col">
                <div class="s-item">
                    <i class="kuma-icon kuma-icon-number3"></i><strong>步骤3</strong>
                </div>
            </li>
            <li class="ds-col">
                <div class="s-item">
                    <i class="kuma-icon kuma-icon-number4"></i><strong>步骤4</strong>
                </div>
            </li>
            <li class="ds-col">
                <div class="s-item">
                    <i class="kuma-icon kuma-icon-number5"></i><strong>步骤5</strong>
                </div>
            </li>
        </ul>
    </div>
</div>
````

````html
<div class="kuma-steps">
    <div class="kuma-steps-bd">
        <ul class="fn-clear double-s ds-dash">
            <li class="ds-col">
                <div class="s-item done">
                    <i class="kuma-icon kuma-icon-number1"></i><strong>步骤1</strong>
                </div>
                <p class="desc">2014-12-11</p>
            </li>
            <li class="ds-col">
                <div class="s-item">
                    <i class="kuma-icon kuma-icon-number2"></i><strong>步骤2</strong>
                </div>
                <p class="desc">2014-12-11</p>
            </li>
            <li class="ds-col">
                <div class="s-item">
                    <i class="kuma-icon kuma-icon-number3"></i><strong>步骤3</strong>
                </div>
                <p class="desc">2014-12-11</p>
            </li>
            <li class="ds-col">
                <div class="s-item">
                    <i class="kuma-icon kuma-icon-number4"></i><strong>步骤4</strong>
                </div>
                <p class="desc">2014-12-11</p>
            </li>
            <li class="ds-col">
                <div class="s-item">
                    <i class="kuma-icon kuma-icon-number5"></i><strong>步骤5</strong>
                </div>
                <p class="desc">2014-12-11</p>
            </li>
        </ul>
    </div>
</div>
<br />
````

### 三状态条

> 通过添加 `.various-s` 来变换三中状态(done/current/wait)展现形式。

````html
<div class="kuma-steps">
    <div class="steps-status">
        <span class="status-start"></span>
        <ul class="various-s">
            <li class="vs-col done">
                <div class="status-line"><s></s></div>
                <p class="desc">高朋</p>
            </li>
            <li class="vs-col done">
                <div class="status-line"><s></s></div>
                <p class="desc">朱丽珍</p>
            </li>
            <li class="vs-col cur">
                <div class="status-line"><s></s></div>
                <p class="desc">李江华</p>
            </li>
            <li class="vs-col wait">
                <div class="status-line"><s></s></div>
                <p class="desc">李剑锋(行癫)</p>
            </li>
            <li class="vs-col wait last">
                <div class="status-line"><s></s></div>
                <p class="desc">姜鹏(三丰)</p>
            </li>
        </ul>
    </div>
</div>
````

### 竖向动态条 `New`

````html
<div class="kuma-steps-vertical">
    <div class="steps-status">
        <ul class="various-s">
            <li class="vs-row done">
                <div class="vs-row-hd">
                    <span class="desc">新投递</span>
                    <div class="circle">·</div>
                </div>
                <div class="vs-row-bd"></div>
            </li>
            <li class="vs-row done">
                <div class="vs-row-hd">
                    <span class="desc">简历评估</span>
                    <div class="circle">·</div>
                </div>
                <div class="vs-row-bd"></div>
            </li>
            <li class="vs-row cur">
                <div class="vs-row-hd">
                    <span class="desc">简历评估通过</span>
                    <div class="circle">·</div>
                </div>
                <div class="vs-row-bd">
                    吃饭比欧神快
                </div>
            </li>
            <li class="vs-row wait">
                <div class="vs-row-hd">
                    <span class="desc">面试</span>
                    <div class="circle">·</div>
                </div>
                <div class="vs-row-bd"></div>
            </li>
            <li class="vs-row wait">
                <div class="vs-row-hd">
                    <span class="desc">发Offer</span>
                    <div class="circle">·</div>
                </div>
                <div class="vs-row-bd"></div>
            </li>
            <li class="vs-row wait">
                <div class="vs-row-hd">
                    <span class="desc">入职</span>
                    <div class="circle">·</div>
                </div>
            </li>
        </ul>
    </div>
</div>
````
