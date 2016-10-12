import React from 'react';
import request from 'superagent';
import PostList from './PostList.jsx';
import Post from './Post.jsx';

// const propTypes = {
//   message: React.PropTypes.string.isRequired,
// };

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
    };
    this.handlePublish = this.handlePublish.bind(this);
    this.httpUpdatePost = this.httpUpdatePost.bind(this);
    this.httpPublishPost = this.httpPublishPost.bind(this);
    this.httpDeletePost = this.httpDeletePost.bind(this);
  }
  componentDidMount() {  // Only happens once.. on first load
    this.httpGetPosts();
  }
  httpGetPosts() {
    const url = 'https://meerkats-e16d1.firebaseio.com/posts.json';
    request.get(url)  // go to API get
           .then((response) => {  // When the response is received...
             const postsData = response.body;  // Grab the data
             let posts = [];
             if (postsData) {
               posts = Object.keys(postsData).map((id) => {  // conver their data.... into nice clean objects
                 const individualPostData = postsData[id];  // grabbing indiviudal data record
                 return {  // ... and making it NICE!
                   id,  // <- same as   id: id
                   author: individualPostData.author,
                   content: individualPostData.content,
                  //  likeCount: individualPostData.likeCount,
                 };
               });
             }
             this.setState({ posts });
           });
  }
  handlePublish({ id, content, author }) {
    if (id) {
      this.httpUpdatePost({ id, content, author });
    } else {
      this.httpPublishPost({ content, author });
    }
  }
  httpDeletePost(id) {
    const url = `https://meerkats-e16d1.firebaseio.com/posts/${id}.json`;
    request.del(url)
           .then(() => {
             this.httpGetPosts();
           });
  }
  httpUpdatePost({ id, content, author }) {
    const url = `https://meerkats-e16d1.firebaseio.com/posts/${id}.json`;
    request.patch(url)
           .send({ content, author })
           .then(() => {
             this.httpGetPosts();
           });
  }
  httpPublishPost({ content, author }) {
    const url = 'https://meerkats-e16d1.firebaseio.com/posts.json';
    request.post(url)
           .send({ content, author })
           .then(() => {
             this.httpGetPosts();
           });
  }
  render() {
    return (
      <div className="container">
        <h1>{this.props.message}</h1>
        <PostList handleDelete={this.httpDeletePost} handlePublish={this.handlePublish} posts={this.state.posts} />
        <Post handleDelete={this.httpDeletePost} handlePublish={this.handlePublish} />
      </div>
    );
  }
}

// App.propTypes = propTypes;

export default App;
