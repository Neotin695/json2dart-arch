import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
  console.log('Test extension activated!');

  const disposable = vscode.commands.registerCommand('testExtension.sayHello', () => {
    vscode.window.showInformationMessage('Hello from Test Extension!');
  });

  context.subscriptions.push(disposable);
}

export function deactivate() {}
