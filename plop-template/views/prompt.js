
module.exports = {
    "description":"生成一个vue页面",
    "prompts":[
        {
            type: 'input',    //提示信息的类型 input 输入 checkbox 选择 list 列表
            name: 'view',  //字段的名称
            message: '请输入创建的目录/文件(eg: index/index(src/views/下面创建index文件夹/index.vue))'  //提示的信息说明
        },
        {
            type: 'checkbox',
            name: 'blocks',
            message: '请选择需要的模块(*)需要()不需要',
            choices: [
            {
              name: '<template>',
              value: 'template',
              checked: true
            },
            {
              name: '<script>',
              value: 'script',
              checked: true
            },
            {
              name: '<style>',
              value: 'style',
              checked: true
            }
        ]
        }
    ],
    actions:function(data){
    // path 改存储路径
        
        const configs = [
            {
            type:"add",
            path:"src/views/{{view}}.vue",
            templateFile:"plop-template/views/index.hbs",
            data:{
                name:data.name,
                template:data.blocks[0],
                script:data.blocks[1],
                style:data.blocks[2]
            }
            }
        ]
        console.log(data)
        return configs;
    }
}
