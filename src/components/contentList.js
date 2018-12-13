import React,{ Component } from 'react';
import './contentList.scss';

export default class listData extends Component{
    render(){
         const listData = [];
         this.props.dataInfo.map(item=>{
            if(item.top){
                listData.push(
                    <section key={item.id} className='iteminfo'>   
                        <img className='avatarimg' src={item.author.avatar_url} alt='头像'/>
                        <div className='list_title'>
                            <span className='tag'>置顶</span>
                            <h3 className='contenttitle'>{item.title}</h3>
                            <div className="timer">
                                <span className='contentvisitor'>{item.reply_count}/{item.visit_count}</span>
                                <span className='contenttime'>{new Date(item.last_reply_at).toLocaleString() }</span>
                            </div>
                        </div>
                    </section>
                )
            }else if(item.good){
                listData.push(
                    <section key={item.id} className='iteminfo'>   
                        <img className='avatarimg' src={item.author.avatar_url} alt='头像'/>
                        <div className='list_title'>
                            <span className='tag'>精华</span>
                            <h3 className='contenttitle'>{item.title}</h3>
                            <div className="timer">
                                <span className='contentvisitor'>{item.reply_count}/{item.visit_count}</span>
                                <span className='contenttime'>{new Date(item.last_reply_at).toLocaleString() }</span>
                            </div>
                        </div>
                    </section>
                )
            }else if(item.tab === 'share'){
                listData.push(
                    <section key={item.id} className='iteminfo'>   
                        <img className='avatarimg' src={item.author.avatar_url} alt='头像'/>
                        <div className='list_title'>
                            <span className='tag'>分享</span>
                            <h3 className='contenttitle'>{item.title}</h3>
                            <div className="timer">
                                <span className='contentvisitor'>{item.reply_count}/{item.visit_count}</span>
                                <span className='contenttime'>{new Date(item.last_reply_at).toLocaleString() }</span>
                            </div>
                        </div>
                    </section>
                )
            }else if(item.tab === 'weex'){
                listData.push(
                    <section key={item.id} className='iteminfo'>   
                        <img className='avatarimg' src={item.author.avatar_url} alt='头像'/>
                        <div className='list_title'>
                            <h3 className='contenttitle'>{item.title}</h3>
                            <div className="timer">
                                <span className='contentvisitor'>{item.reply_count}/{item.visit_count}</span>
                                <span className='contenttime'>{new Date(item.last_reply_at).toLocaleString() }</span>
                            </div>
                        </div>
                    </section>
                )
            }
            else if(item.tab === 'ask'){
                listData.push(
                    <section key={item.id} className='iteminfo'>   
                        <img className='avatarimg' src={item.author.avatar_url} alt='头像'/>
                        <div className='list_title'>
                            <span className='tag'>问答</span>
                            <h3 className='contenttitle'>{item.title}</h3>
                            <div className="timer">
                                <span className='contentvisitor'>{item.reply_count}/{item.visit_count}</span>
                                <span className='contenttime'>{new Date(item.last_reply_at).toLocaleString() }</span>
                            </div>
                        </div>
                    </section>
                )
            }else if(item.tab === 'job'){
                listData.push(
                    <section key={item.id} className='iteminfo'>   
                        <img className='avatarimg' src={item.author.avatar_url} alt='头像'/>
                        <div className='list_title'>
                            <span className='tag'>招聘</span>
                            <h3 className='contenttitle'>{item.title}</h3>
                            <div className="timer">
                                <span className='contentvisitor'>{item.reply_count}/{item.visit_count}</span>
                                <span className='contenttime'>{new Date(item.last_reply_at).toLocaleString() }</span>
                            </div>
                        </div>
                    </section>
                )
            }
         })
        return(
            <div className='clist'>
                {listData}
            </div>
        )
    }
}