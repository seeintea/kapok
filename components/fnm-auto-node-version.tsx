import { codeToHtml } from "shiki";

export async function ShellCodeBlock() {
  const out = await codeToHtml(
    `#!/bin/bash
current=\`pwd\`
len=\${#current}

target=("use/node/16" "use/node/18")
node_version=("16" "18")
version="default"

for idx in \${!target[@]};
do
  path=\${target[$idx]}
  sub=\${current#*$path}
  sub_len=\${#sub}
  if [ $len != $sub_len ]
  then
    version=\${node_version[$idx]}
    break
  fi
done

exec=\`fnm use \${version}\``,
    {
      lang: "shell",
      theme: "github-dark",
    }
  );

  return <div dangerouslySetInnerHTML={{ __html: out }} />;
}
