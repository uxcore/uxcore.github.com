import Actions from './actions';

let Store = Reflux.createStore({
    listenables: [Actions],
    data: {
        cssurl: '/static/style/index.css'
    },
    onBuild(data) {
        console.log('build css with ', data);
        let submitData = {};
        Object.keys(data).forEach((key) => {
            submitData[`@${key}`] = data[key];
        });
        $.ajax({
            type: 'post',
            url: 'http://localhost:8082/api/css/build',
            data: {
                name: 'uxcore-kuma',
                variables: submitData
            }
        }).done((res) => {
            if (!res.hasError) {
                Actions.build.completed('http://localhost:8082' + res.content.css);
            } else {
                Actions.build.failed();
            }
        });
    },
    onBuildCompleted(url) {
        this.data.cssurl = url;
        this.triggerAsync(this.data);
    },
    onBuildFailed() {
        console.log('onBuildFailed');
    },
    updateComponent() {
        this.trigger(this.data);
    },
    getInitialState() {
        return this.data;
    }
});

export default Store;