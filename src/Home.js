import './App.css';
import logo from './Images/logo.png';
import { FiLogIn } from 'react-icons/fi';
import img1 from './Images/img.webp';
import { FaThList } from 'react-icons/fa';
import {HiBadgeCheck} from 'react-icons/hi';
import {MdPersonSearch } from 'react-icons/md';
import {BiMessageSquareDots} from 'react-icons/bi';
import {AiFillApple} from 'react-icons/ai';
import {AiFillAndroid} from 'react-icons/ai';
import {AiFillFacebook} from 'react-icons/ai';
import {AiFillTwitterSquare} from 'react-icons/ai';
import {AiFillLinkedin} from 'react-icons/ai';
import {AiFillYoutube} from 'react-icons/ai';
function Home() {
  return (
    <div className="Home">
      <table class="tb1" border="0px" width="100%">
        <tr height="40px">
          <td width="10%"><div><img src={logo} width="70%" height="60px"></img></div></td>
          <td width="10%" height="20px" class="post"><div>Post a Job</div></td>
          <td width="10%" height="20px" class="resu"><div>Find Resumes</div></td>
          <td width="10%" height="20px" class="reso"><div>Resource</div></td>
          <td width="40%"></td>
          <td width="10%" class="bck" height="10px"><div class="logo"><FiLogIn FaFolderOpen size="16px" class="licon" />Sign Up </div></td>
          <td width="10%" class="hlp">Help Center</td>

        </tr>
      </table>
      <table>
        <tr height="100px"></tr>
      </table>
      <table border="0px" width="100%">
        <tr height="500px">
          <td width="60%"><p class="main">Find The Best Jobs</p><p class="sub">No matter the skills, experience level,
            or qualifications you’re looking for, you’ll find the right job on JOBS.</p>
            <button class="button">Post a Job</button></td>
          <td width="40%"><div class=''></div><img src={img1} height="500px" width="40%" ></img> </td>
        </tr>
      </table>
      <br></br>
      <br></br>
      <br></br>
      <table border="0px" class="tb2" width="90%">
        <tr height="300px">
          <td width="30%" class="col1"><p class="hd1">1</p><p class="bd1">Create your free account</p><p class="ft1">All you need is your email address to create an account and start building your job post.</p></td>
          <td width="30%" class="col2"><p class="hd1">2</p><p class="bd1">Build your job post</p><p class="ft1">Then just add a title, description, and location to your job post, and you're ready to go.</p></td>
          <td width="30%" class="col3"><p class="hd1">3</p><p class="bd1">Post your job</p><p class="ft1">After you post your job use our state of the art tools to help you find dream talent.</p></td>
        </tr>
      </table>
      <br></br>
      <br></br>
      <br></br>
      <table border="0px" class="abt" width="80%">
        <tr height="250px">
          <p class="cont">Save time and effort in your hiring journey.</p>
          <p class="cont2">Finding the best fit for the job shouldn’t be a full-time job. Indeed’s simple and powerful tools let you source, screen, and hire faster.</p>
        </tr>
      </table>
      <br></br>
      <br></br>
      <br></br>
      <table border="0px" class="bx" width="60%">
        <tr height="300px">
          <td width="50%"><FaThList FaFolderOpen size="56px" class="bx1"/><p class="bx2">Get more visibility</p>
          <p class="bx3">Sponsor your job to ensure it gets seen by the right people.</p></td>
          <td width="50%"><HiBadgeCheck FaFolderOpen size="56px" class="bx1"/><p class="bx2">Find quality applicants</p>
          <p class="bx3">List your required skills for the job so relevant candidates apply.</p></td>
        </tr>
      </table>
      <table border="0px" class="bx" width="60%">
        <tr height="300px">
          <td width="50%"><MdPersonSearch FaFolderOpen size="56px" class="bx1"/><p class="bx2">Verify their abilities</p>
          <p class="bx3">Add screener questions and assessments to test applicants’ skills.</p></td>
          <td width="50%"><BiMessageSquareDots FaFolderOpen size="56px" class="bx1"/><p class="bx2">Organize your candidates</p>
          <p class="bx3">View and sort resumes, send messages, and schedule interviews-all on Indeed.</p></td>
        </tr>
      </table>
      <table class="ftr" border="0px" width="100%">
        <tr height="50px">
          <td><p class="ftr2" width="33%">&copy; Thushar 2022</p></td>
          <td width="33%"></td>
          <td width="33%" class="ftr3"><AiFillApple FaFolderOpen size="34px"/><AiFillAndroid FaFolderOpen size="34px"/><AiFillFacebook FaFolderOpen size="34px"/> 
          <AiFillTwitterSquare FaFolderOpen size="34px"/><AiFillLinkedin FaFolderOpen size="34px"/><AiFillYoutube FaFolderOpen size="34px"/></td>
        </tr>
      </table>
    </div>
  );
}

export default Home;
