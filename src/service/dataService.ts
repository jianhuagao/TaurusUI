import { MenuItemProps } from '@/components/menu';
import { join } from 'path';
import { promises as fs } from 'fs';
import { serialize } from 'next-mdx-remote/serialize';
import { notFound } from 'next/navigation';
import { removeLeadingNumberDot } from '@/utils/utils';

/**
 * 获取组件目录
 */
export async function getComponents() {
  try {
    const menuItems: MenuItemProps[] = [];

    const componentsTypePath = join(process.cwd(), '/src/data/components');
    const componentsTypeSlugs = await fs.readdir(componentsTypePath);

    for (const componentsTypeSlug of componentsTypeSlugs) {
      // console.log(componentsTypeSlug);
      //去掉点的标题
      const reComponentsTypeSlug = removeLeadingNumberDot(componentsTypeSlug);
      const menuNewItem: MenuItemProps = { title: reComponentsTypeSlug, slug: reComponentsTypeSlug };

      const typeMainPath = join(componentsTypePath, componentsTypeSlug);

      const typeUiArr = await fs.readdir(typeMainPath);

      const childrenPromises = typeUiArr.map(async typeUiSlug => {
        const typeUiName = typeUiSlug.replace('.mdx', '');
        return { title: typeUiName, slug: `${reComponentsTypeSlug}/${typeUiName}` };
      });

      const children = await Promise.all(childrenPromises);
      menuNewItem.children = children;
      menuItems.push(menuNewItem);
    }
    return menuItems;
  } catch {
    notFound();
  }
}

export interface ComponentData extends Record<string, unknown> {
  id: string;
  components?: object;
  slug: string;
  category: string;
  wrapper: string;
  creator: string;
  interactive: boolean;
  innerWrapper?: string;
  defaultCfg?: string;
  span?: string;
  title: string;
  componentsName: string;
  articles?: string[];
}

/**
 * 通过当前组件页面路径获取组件
 */
export async function getCollection(params: { compType: string; compName: string }) {
  try {
    const { compType, compName } = params;
    const componentsDirectory = join(process.cwd(), '/src/data/components');

    // 获取所有文件夹名称
    const allFolders = await fs.readdir(componentsDirectory, { withFileTypes: true });
    const matchedFolder = allFolders
      .filter(dirent => dirent.isDirectory())
      .find(dirent => removeLeadingNumberDot(dirent.name) === compType);

    if (!matchedFolder) {
      return notFound();
    }

    const componentPath = join(componentsDirectory, matchedFolder.name, `${compName}.mdx`);
    const componentItem = await fs.readFile(componentPath, 'utf-8');

    const mdxSource = await serialize<ComponentData, ComponentData>(componentItem, {
      parseFrontmatter: true,
      // 允许 JS 表达式（有风险）
      blockJS: false,
      // 默认 true：尽量挡掉危险全局（仍建议保留）
      blockDangerousJS: true
    });

    return {
      collectionData: {
        ...mdxSource.frontmatter
      },
      collectionContent: mdxSource
    };
  } catch {
    notFound();
  }
}

export interface ArticleDicProps {
  articleId: number;
  artTitle: string;
  authName: string;
  isPublished: boolean;
  pubDate: string;
  lastModDate: string;
  category: string;
}
export interface ArticleDicMdxProps {
  articles: {
    [key: string]: ArticleDicProps;
  };
}

function toSortedArticlesArray(data: ArticleDicMdxProps) {
  return Object.values(data.articles)
    .filter(a => a.isPublished)
    .sort((a, b) => new Date(b.pubDate).getTime() - new Date(a.pubDate).getTime());
}

/**
 * 获取Articles目录信息
 */
export async function getArticlesDic(ids?: string[]) {
  try {
    const directoryDicPath = join(process.cwd(), '/src/data/articles/directory.mdx');

    const componentItem = await fs.readFile(directoryDicPath, 'utf-8');

    const mdxSource = await serialize<ArticleDicMdxProps, ArticleDicMdxProps>(componentItem, {
      parseFrontmatter: true,
      // 允许 JS 表达式（有风险）
      blockJS: false,
      // 默认 true：尽量挡掉危险全局（仍建议保留）
      blockDangerousJS: true
    });
    const sortedArr = toSortedArticlesArray(mdxSource.frontmatter);

    if (ids?.length) {
      // ids 是字符串数组：["2","1"] 这种
      const idSet = new Set(ids.map(String));
      return sortedArr.filter(a => idSet.has(String(a.articleId)));
    }

    return sortedArr;
  } catch {
    notFound();
  }
}

interface ArticleMdxProps extends Record<string, unknown> {
  title: string;
  description: string;
  date: string;
}
/**
 * 通过Articlesid获取Articles内容
 */
export async function getArticles(id: number) {
  try {
    const directoryDicPath = join(process.cwd(), `/src/data/articles/${id}.mdx`);

    const componentItem = await fs.readFile(directoryDicPath, 'utf-8');

    const mdxSource = await serialize<ArticleMdxProps, ArticleMdxProps>(componentItem, {
      parseFrontmatter: true,
      // 允许 JS 表达式（有风险）
      blockJS: false,
      // 默认 true：尽量挡掉危险全局（仍建议保留）
      blockDangerousJS: true
    });

    return {
      data: mdxSource.frontmatter,
      content: mdxSource
    };
  } catch {
    notFound();
  }
}
