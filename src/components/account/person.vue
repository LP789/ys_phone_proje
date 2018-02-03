<template>
	<div>
	<section class="id_set">
		<h2>个人资料</h2>
		<ul class="set_list">
			<li class="clearfix">
				<h3>头像<span>*</span></h3>
				<div class="input_cont">
					<div class="hd_show">
						<img alt="" src="img/set_head.png"/>
					</div>
					<div class="edit_hd_pic">
						<p class="update"><input type="file" name=""/>修改头像</p>
						<p class="sub_tit">（仅支持JPG、PNG文件小于6M）</p>
					</div>
				</div>
			</li>
			<li class="clearfix">
				<h3>昵称<span>*</span></h3>
				<div class="input_cont">
					<input type="text" name="" class="id_input name">
				</div>
			</li>
			<li class="clearfix">
				<h3>姓名<span>*</span></h3>
				<div class="input_cont">
					<input type="text" name="" class="id_input u_name">
					<h4>性别</h4>
					<input type="text" name="" class="id_input sex">
				</div>
			</li>
			<li class="clearfix">
				<h3>电话<span>*</span></h3>
				<div class="input_cont">
					<input type="text" name="" class="id_input mid">
				</div>
			</li>
			<li class="clearfix">
				<h3>邮箱<span>*</span></h3>
				<div class="input_cont">
					<input type="text" name="" class="id_input mid">
				</div>
			</li>
			<li class="clearfix">
				<h3>行业<span>*</span></h3>
				<div class="input_cont">
					<input type="text" name="" class="id_input mid">
				</div>
			</li>
			<li class="clearfix">
				<h3>生日</h3>
				<div class="input_cont">
					<select class="b_year">
						<option value="">年</option>
						<option value="2017">2017</option>
						<option value="2016">2016</option>
						<option value="2015">2015</option>
						<option value="2014">2014</option>
					</select>
					<select class="b_month">
						<option value="">月</option>
						<option value="1">1</option>
						<option value="2">2</option>
						<option value="3">3</option>
						<option value="4">4</option>
					</select>
					<select class="b_day">
						<option value="">日</option>
						<option value="1">1</option>
						<option value="2">2</option>
						<option value="3">3</option>
						<option value="4">4</option>
					</select>
				</div>
			</li>
			<li class="clearfix">
				<h3>所在地区</h3>
				<div class="input_cont">
					<select class="b_pro">
						<option value="">省份</option>
						<option value="河南省">河南省</option>
						<option value="湖北省">湖北省</option>
						<option value="青海省">青海省</option>
					</select>
					<select class="b_city">
						<option value="">城市</option>
						<option value="华北">华北</option>
						<option value="华东">华东</option>
						<option value="华西">华西</option>
						<option value="华南">华南</option>
					</select>
					<select class="b_area">
						<option value="">地区</option>
						<option value="上游">上游</option>
						<option value="下游">下游</option>
						<option value="中油">中油</option>
						<option value="环游">环游</option>
					</select>
				</div>
			</li>
			<li class="clearfix">
				<h3>年龄</h3>
					<div class="input_cont">
						<input type="text" name="" class="id_input u_age">
						<h4>职位</h4>
						<input type="text" name="" class="id_input u_work">
					</div>
			</li>
			<li class="clearfix">
				<h3>在职公司</h3>
				<div class="input_cont">
					<input type="text" name="" class="id_input mid">
				</div>
			</li>
			<li class="clearfix">
				<h3>技能标签</h3>
				<div class="input_cont">
					<textarea class="id_textarea" placeholder="多个技能之间用“、”分割"></textarea>
				</div>
			</li>
			<li class="clearfix">
				<h3>个人简介</h3>
				<div class="input_cont">
					<textarea class="id_textarea"></textarea>
				</div>
			</li>
		</ul>
		<a href="javascript:;" class="per_save">保存</a>
	</section>
	</div>
</template>

<script>
    export default {
        name: "person",
        data() {
            return {}
        },
        methods: {},
        mounted() {
        }
    }
</script>

<style scoped>
.id_set >h2{
	font-size: 0.34rem;
	color: #1e2126;
	border-bottom: 1px solid #dadada;
	padding: 0.5rem 0.2rem 0.36rem;
}
.set_list{
	padding: 0.6rem 0.2rem 0;
}
.set_list li{
	padding-bottom: 0.46rem;
	font-size: 0;
}
.set_list li h3{
	float: left;
	width: 1.5rem;
	height: 0.54rem;
	line-height: 0.54rem;
	font-size: 0.3rem;
	color: #1e2126;
}
.set_list li h3 span{ color:red ;}
.set_list li .input_cont{
	float: right;
	width: 5.6rem;
}
.input_cont .id_input{
	height: 0.54rem;
	line-height: 0.54rem;
	padding: 0 0.1rem;
	border: 1px solid #e1e1e1;
	font-size: 0.24rem;
}
.input_cont .id_textarea{
	height: 2.04rem;
	width: 3.92rem;
	padding: 0.1rem;
	border: 1px solid #e1e1e1;
	font-size: 0.24rem;
}
.set_list li .input_cont h4{
	display: inline-block;
	font-size: 0.3rem;
	color: #1e2126;
	width: 1.36rem;
	padding-left: 0.54rem;
}
.input_cont .id_input.name{ width: 5.6rem; }
.input_cont .id_input.u_name{ width: 2.53rem; }
.input_cont .id_input.sex{ width: 1.7rem; }
.input_cont .id_input.mid{ width: 3.92rem; }
.input_cont .id_input.u_age{ width: 2.04rem; }
.input_cont .id_input.u_work{ width: 2.04rem; }
.set_list li .b_year,
.set_list li .b_day,
.set_list li .b_month,
.set_list li .b_pro,
.set_list li .b_city,
.set_list li .b_area{
	display: inline-block;
	width: 1.7rem;
	margin-right: 0.25rem;
	height: 0.54rem;
	line-height: 0.54rem;
	padding: 0 0.1rem;
	border: 1px solid #e1e1e1;
	font-size: 0.24rem;
}
.set_list li .b_day,
.set_list li .b_area{ margin-right: 0; }
.input_cont .upload_btn{
	position: relative;
	display: block;
	width: 2rem;
	height: 0.54rem;
	line-height: 0.54rem;
	font-size: 0.28rem;
	color: #fff;
	text-align: center;
	background-color: #ffbc22;
	border-radius: 0.06rem;
}
.id_set .per_save{
	display: block;
	width: 3.92rem;
	height: 0.6rem;
	line-height: 0.6rem;
	font-size: 0.24rem;
	text-align: center;
	color: #fff;
	background-color: #ffbc22;
	margin: 0 auto 0.3rem auto;
}
.input_cont .upload_btn .uploadFile{
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	opacity: 0;
}
.input_cont .id_node{
	height: 0.3rem;
	line-height: 0.3rem;
	font-size: 0.24rem;
	color: #b6b6b6;
	margin-top: 0.06rem;
}
.input_cont .id_show_pic{
	width: 3.72rem;
	height: 1.8rem;
	background-color: #f6f6f6;
	border:1px solid #e1e1e1;
	margin-top: 0.22rem;
	text-align: center;
	line-height: 1.8rem;
}
.input_cont .id_show_pic img{
	max-height: 100%;
	max-width: 100%;
}
.input_cont .id_show_pic > span{
	font-size: 0.3rem;
	color: #919293;
}
.input_cont .id_select{
	height: 0.54rem;
	width: 2.44rem;
	line-height: 0.54rem;
	font-size: 0.24rem;
	border:1px solid #e1e1e1;
	padding-left:0.1rem;
	color: #a6a5a5;
}
.set_list li .sub_btn{
	display: block;
	width: 1.5rem;
	height: 0.54rem;
	line-height: 0.54rem;
	text-align: center;
	font-size: 0.24rem;
	color: #fff;
	background: #ffbc22;
	margin: 0 auto;
	border-radius: 0.06rem;
}
/*个人信息设置样式*/
.input_cont .hd_show{
	float: left;
	height: 1.68rem;
	width: 1.68rem;
	border-radius: 50%;
	overflow: hidden;
}
.input_cont .hd_show img{ width: 100%; height: 100%; }
.input_cont .edit_hd_pic{
	float: left;
	width: 3.38rem;
	height: 1.68rem;
	margin-left: 0.54rem;
	font-size: 0;
}
.edit_hd_pic .update{
	position: relative;
	font-size: 0.26rem;
	color: #ffbc22;
	line-height: 0.3rem;
	margin-top: 0.3rem;
}
.edit_hd_pic .update input{
	position: absolute;
	z-index: 0;
	width: 100%;
	height: 100%;
	opacity: 0;
}
.edit_hd_pic .sub_tit{
	font-size: 0.24rem;
	color:#a1a5ab;
	line-height: 0.3rem;
	margin-top: 0.1rem;
}
.set_list .input_cont .sub_tit{
	font-size: 0.24rem;
	color: #a1a5ab;
}
/*作品上传*/
.upload_show{
	width: 7.1rem;
	height: 3.68rem;
	text-align: center;
	line-height: 3.68rem;
	background: #f1f1f1;
	margin: 0.2rem auto 0;
}
.upload_show img{
	min-height: 3.68rem;
	max-width: 7.1rem;
}
.w_up_cont{
	padding: 0.3rem 0.2rem;
}
.w_up_cont a{
	display: block;
	float: right;
	width: 1.4rem;
	height: 0.54rem;
	line-height: 0.54rem;
	text-align: center;
	font-size: 0.28rem;
	color: #fff;
	border-radius: 0.08rem;
	background-color: #ffbc22;
}
.w_url_up{
	position: relative;
	display: block;
	float: right;
	width: 1.4rem;
	height: 0.6rem;
	border: 1px solid #e1e1e1;
	background-color: #f1f1f1;
	line-height: 0.6rem;
	text-align: center;
	font-size: 0.3rem;
	color: #aaa;
}
#up_file_input{
	position: absolute;
	z-index: 1;
	width: 100%;
	height: 100%;
	top: 0;
	left: 0;
	opacity: 0;
}
.up_submit_btn{
	display: block;
	width: 3.46rem;
	height: 0.66rem;
	line-height: 0.66rem;
	text-align: center;
	background-color: #ffbc22;
	margin: 0.36rem auto 0.56rem;
	border-radius: 0.08rem;
	font-size: 0.28rem;
	color: #fff;
}
</style>
