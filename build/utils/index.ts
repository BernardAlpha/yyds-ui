import { spawn } from 'child_process';
import { projectRoot } from './paths';

export const withTaskName = <T>(name: string, fn: T) => 
  Object.assign(fn, { displayName: name })

export const run = async (command: string) => {
  // console.log('projectRoot',projectRoot);
  return new Promise((resolve) => {
    const [cmd, ...args] = command.split(' ');
    const app = spawn(cmd, args, {
      cwd: projectRoot,
      stdio: 'inherit',
      shell: true
    });
    app.on('close', resolve);
  })
}

// 重写打包后的@yyds-ui 路径
export const pathRewriter = (format) => {
  return (id: string) => {
    id = id.replaceAll("@yyds-ui", `yyds-ui/${format}`);
    return id;
  };
};