import Link from 'next/link';

import { Button } from '@radix-ui/themes';

import { AuthProvider } from '@/app/provider';

const navs = [
  {
    name: '首页',
    path: '',
  },
  {
    name: '模型',
    path: '/model',
  },
  {
    name: '商品',
    path: '/product',
  },
  {
    name: '订单',
    path: '/order',
  },
  {
    name: '用户',
    path: '/user',
  },
  {
    name: '对话',
    path: '/chat',
  },
  {
    name: '设置',
    path: '/setting',
  },
];

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <AuthProvider admin={true}>
      <section>
        <header>
          {navs.map((nav) => (
            <Link href={`/dashboard${nav.path}`} key={nav.path}>
              <Button mx="2" size="4" variant="surface" radius="large">
                {nav.name}
              </Button>
            </Link>
          ))}
        </header>
        <main>{children}</main>
      </section>
    </AuthProvider>
  );
}
