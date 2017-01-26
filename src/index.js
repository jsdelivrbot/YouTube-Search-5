import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import _ from 'lodash';

import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetails from './components/video_details';

const API_KEY = 'AIzaSyAPhtwvk_rxojNSnPVXrQBGMLZorPp8Pzk';

class App extends Component {

    constructor(props) {
        super(props);

        this.state = { 
            videos: [],
            selectedVideo: null
        };

        this.videoSearch("corn snakes");

    }

    

    videoSearch(term) {
            YTSearch({ key: API_KEY, term: term}, (data) => {
                this.setState({ 
                videos: data,
                selectedVideo: data[0]
            });
            console.log(data);
        });
    }

    

    render() {

        const searchVideo = _.debounce(term => this.videoSearch(term), 300);
        return (
            <div>
                <SearchBar onSearchTermChange={searchVideo}/>
                <VideoDetails video={this.state.selectedVideo}/>
                <VideoList 
                    onVideoSelect={selectedVideo => this.setState({selectedVideo})}
                    videos={ this.state.videos }/>
            </div>
        );
    }
}

ReactDOM.render(<App />, document.querySelector(".container"));